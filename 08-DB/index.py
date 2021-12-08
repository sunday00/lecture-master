import sqlalchemy
import pandas as pd
import tabulate

pd.set_option('display.width', 80)

engine = sqlalchemy.create_engine('sqlite:///test.sqlite')
conn = engine.connect()
conn.execute('CREATE TABLE IF NOT EXISTS test (col1 text, col2 text, UNIQUE (col1, col2))')
conn.execute("INSERT OR IGNORE INTO test VALUES ('test1','test2')")
# data = conn.execute('SELECT * FROM test').fetchall()
data = pd.read_sql("SELECT * FROM test", conn)

print( tabulate.tabulate(data, tablefmt="grid", headers=[' ', 'col1', 'col2']) )

conn.close()