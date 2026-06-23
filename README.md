# Lavansec — site

Site institucional da **Lavansec**, rede de lavanderias self-service em Guarulhos/SP.
Site estático (HTML + CSS + JS), servido por nginx em container (deploy no EasyPanel).
Domínio: **www.lavansec.com.br**

## Estrutura

```
lavansec-novo/
├── index.html        Home (cliente): como funciona, por que, unidades, faixa franquia
├── unidades.html     As 5 unidades com endereço, mapa e "como chegar / avaliar no Google"
├── franquia.html     Franquia (resumida): por que investir + CTA
├── assets/
│   ├── css/site.css  Tema claro (cores da marca)
│   └── js/site.js    Nav, menu mobile, scroll reveal
├── favicon.svg
├── Dockerfile        nginx estático
├── nginx.conf
└── docs/superpowers/specs/  Documento de design (fonte da verdade dos dados)
```

## Dados das unidades (fonte da verdade)

5 unidades em Guarulhos/SP, abertas **todos os dias das 7h às 23h**, sabão OMO + amaciante
Comfort inclusos, pagamento PIX/débito/crédito. Endereços, place_ids do Google e links de
avaliação estão em `docs/superpowers/specs/2026-06-23-lavansec-site-cliente-design.md`.

> **Preços:** por decisão do negócio, o site **não exibe preços** (evita comparação entre
> unidades). O valor é informado por unidade via WhatsApp.

## Avaliações do Google (pendente)

Cada unidade já tem o botão "Avaliar no Google" funcionando. As **notas/estrelas** ainda não
foram inseridas — em cada card de unidade (em `index.html` e `unidades.html`) há um bloco
comentado `<!-- NOTA GOOGLE: ... -->`. Para exibir a nota, descomente o `<div class="gscore">`
e preencha a nota e a quantidade de avaliações.

## Ver localmente

```bash
python -m http.server 8080
# abrir http://localhost:8080
```

## Deploy (EasyPanel)

App → Source = repositório `lavansec-novo` → Build = Dockerfile → porta interna **80**.
O site é 100% estático.
