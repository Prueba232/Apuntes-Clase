print("Hello world")
print(2+1)
print(5/2.0) 
x = 2
print(x + 1)
#y = input("dale ")
#print(y)
tupla = (12, "2", (2,1))
print(tupla[2][0])
print(type(tupla))
print(tupla[:x])
# tupla[x] = 1 error porq la tupla es inmutable
w = [2,(3,4)]
print(w)
w[1] = 2

while x <= 5:
    print(x)
    x+=1
    break

hola = "hola mundo"
for o in hola:
    print(x)
    x += 1
    

tu = ((1,2), (3,4))
for (x,y) in tu:
    print(x)
    print(y)

r = 10
print(range(r))

print("Hola %s" % "hector" "s")

def dicc_par(**kwargs):
    for k in kwargs:
        print(k, kwargs[k])

dicc_par(p1 = 1, p2 = 2, p3 = 3)
