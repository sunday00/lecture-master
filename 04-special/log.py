import logging

logger = logging.getLogger("test")
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter(fmt="%(asctime)s - %(name)s %(levelname)s %(message)s")
file_handler = logging.FileHandler(filename="info.log")

# 로거 이름 : 이 로거는 파일 입출력을 기록하는 로거야, 이 로거는 시스템이 올라오면 기록하는 로거야 같은거. 
# 레벨 : 이 로거가 작동하는 레벨
# 형태 : 이 로거는 이 형식으로 쓸거야
# 파일 핸들러 : 이 로거는 파일에 쓸거야

# file_handler.setLevel(logging.INFO)
# 로거의 파일 핸들러가 작동하는 레벨.
  # 아마도 파일핸들러의 로거보다 위의 셋 로거레벨이 낮아야 파일로거도 작동하는 듯
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)
# 로거의 기록 레벨, 형태, 핸들러 적용

logger.debug("bottom")
logger.info("bottom")
logger.warning("bottom")
logger.error("bottom")
logger.critical("bottom")

try:
    2 / 0
except Exception as e :
    logger.info(e)

