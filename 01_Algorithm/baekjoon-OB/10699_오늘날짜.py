#문제 : 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
#입력 : X
#출력 : 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.

from datetime import datetime, timedelta, timezone
utc_now = datetime.now(timezone.utc)
seoul_now = utc_now + timedelta(hours=9)
print(seoul_now.strftime("%Y-%m-%d"))