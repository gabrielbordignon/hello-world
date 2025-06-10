# Sistema para classificar produtos por faixa de preço

preco = float(input("Digite o preço do produto (em R$): "))

if preco <= 100:
    print("Prateleira: Baixo custo")
elif 101 <= preco <= 500:
    print("Prateleira: Médio custo")
else:
    print("Prateleira: Alto custo")
