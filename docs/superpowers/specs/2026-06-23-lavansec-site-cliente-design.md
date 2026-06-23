# Lavansec — novo site (cliente primeiro, franquia leve)

**Data:** 2026-06-23
**Repo:** thiagomajor/lavansec-novo · domínio www.lavansec.com.br
**Deploy:** site estático (Dockerfile + nginx, EasyPanel) — inalterado.

## Objetivo

Transformar o site, hoje 100% landing de captação de franqueado, num **site da marca
voltado ao cliente final** da lavanderia self-service, mantendo a **franquia como uma
seção/página resumida** ("menu Franquia").

Direção: **layout claro e acolhedor** (consumidor), reaproveitando as cores da marca
(laranja `#FF6A1A`, verde `#13392B`, menta `#27C2A0`) e as fontes Poppins/Inter.

## Decisões (validadas com o Thiago)

- Público: **marca + clientes**, franquia leve.
- **Sem preços no site** (segue a regra do robô/CRM de não comparar preço entre unidades).
  CTA de preço → WhatsApp ("consulte o valor da sua unidade").
- **Avaliações Google:** botão "Avaliar no Google" por unidade; **notas numéricas o Thiago
  envia depois** (deixar marcação/placeholder pronto pra inserir).
- **Páginas separadas** (não one-page).

## Dados reais (FONTE DA VERDADE — backup robô Lavansec 2026-06-13 + correção do Thiago)

**Operação (todas as unidades):**
- Horário: **todos os dias, 7h às 23h**.
- Pagamento: **PIX, débito, crédito**.
- **OMO Profissional + Comfort Profissional inclusos** (dosagem automática pela máquina).
- Capacidade **10 kg/máquina**; lavagem **~35 min**, secagem **~45 min**.
- Atendimento/WhatsApp: **(11) 98904-6000**.
- Sem promoções ativas no momento.

**Unidades (5 — todas em Guarulhos/SP):**

| Unidade | Endereço | place_id Google | Link avaliar |
|---|---|---|---|
| São João | Estrada do Saboó, 390 (esq. Av. Sagres) | `ChIJm93vT6SLzpQRIQmX69o9WSQ` | https://g.page/r/CSEJl-vaPVkkEBM/review |
| Presidente Dutra | Rua Itiruçu, 490 | `ChIJ0XcrkTiJzpQRtDjhdVVMVYg` | https://g.page/r/CbQ44XVVTFWIEBM/review |
| Pimentas / Nova Cidade | Estr. Pres. Juscelino Kubitschek de Oliveira, 3845 (esq. R. Igarapé Grande, 312) | `ChIJqbnRLJZjzpQRy01ziQz2XnU` | https://g.page/r/CctNc4kM9l51EBM/review |
| Roland Garros / Zona Norte | Av. Roland Garros, 1465 | `ChIJtYqA4hj1zpQRws8exQYKtPE` | https://g.page/r/CcLPHsUGCrTxEBM/review |
| Gopouva | Av. Torres Tibagy, 70 | `ChIJsZ1k2G71zpQRwo4v1AKb63M` | https://g.page/r/CcKOL9QCm-tzEBM/review |

> "Como chegar" → `https://www.google.com/maps/place/?q=place_id:<place_id>`
> Pimentas e Nova Cidade são a MESMA unidade (dois nomes). Gopouva = unidade "Tibagy" no CRM.
> Notas (estrelas) pendentes: Thiago envia. Preço por unidade existe no CRM mas NÃO vai ao site.

## Estrutura do site

**Nav:** Início · Como funciona · Unidades · Franquia · [WhatsApp]

### `index.html` — Home (cliente)
- Hero acolhedor: lavar+secar em ~1h, 7h–23h todos os dias. CTA WhatsApp + "Ver unidades".
- Como funciona (4 passos): traga a roupa → escolha a máquina → pague (PIX/cartão) → leve pronta.
  Reforço: OMO + Comfort inclusos, 10kg, ~35/~45 min.
- Por que Lavansec (cards): produtos premium inclusos · máquinas profissionais · ambiente
  limpo e seguro · várias unidades perto de você · 7h–23h todos os dias · pague no app/cartão.
- Nossas unidades (5 cards: endereço, "Como chegar", "Avaliar no Google"; bloco de nota Google).
- Prova social (avaliações Google — nota real quando enviada).
- Faixa Franquia resumida → link para `franquia.html`.
- CTA final WhatsApp + rodapé.

### `unidades.html` — Unidades
- As 5 lojas: endereço completo, horário 7h–23h, "Como chegar" (Maps por place_id),
  "Avaliar no Google". Sem preço.

### `franquia.html` — Franquia (resumida)
- Versão enxuta do material atual: "Seja franqueado de uma rede validada em 5 unidades".
- 3–4 destaques (mercado em alta, operação sem funcionário fixo, equipamento líder mundial,
  modelo já validado). CTA "Quero ser franqueado" → WhatsApp. Sem DRE/tabelões pesados.

### Removidos
- `mercado.html` e `maquinas.html` standalone (conteúdo de investidor) — essência resumida
  em `franquia.html`.

## Não-objetivos
- Não exibir preços nem comparativo de preço entre unidades.
- Não inventar notas/avaliações do Google.
- Não alterar o deploy (Dockerfile/nginx) além do necessário.
