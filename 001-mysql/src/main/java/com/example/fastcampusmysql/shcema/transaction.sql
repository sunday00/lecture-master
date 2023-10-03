start transaction;
select * from Post
        where memberId=1 and contents = 'string' for update;
commit;

select * from performance_schema.data_locks;

select * from information_schema.INNODB_TRX;