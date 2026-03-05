#문제 : 두 정수 A와 B를 입력받은 다음, A와 B를 비교하는 프로그램을 작성하시오.
#입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
#출력 : 첫째 줄에 A와 B를 비교한 결과를 출력한다.

a, b = input().split()
if int(a) > int(b):
    print(">")
elif int(a) < int(b):
    print("<")
else:
    print("==")