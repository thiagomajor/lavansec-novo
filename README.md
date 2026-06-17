# NOVO Lavan — versão em avaliação

Versão **nova** do material web da Lavansec, criada para **comparar lado a lado** com a versão atual
(`03-Site` / `04-Landing-Franquia`) e ajudar o Thiago a montar a versão final. **Nada da versão antiga
foi alterado** — esta é uma pasta independente.

## O que mudou nesta versão
- Identidade industrial-editorial escura (tokens oficiais Opção B: laranja, verde escuro, menta).
- Todo o conteúdo novo do **folder oficial Speed Queen / Alliance (jun/2025)**: mercado, autoridade da
  marca, linha de equipamentos com foto, plataforma Insights, comparação de classes de ativos.
- Bloco **"Números Speed Queen"** (simulação de referência do fabricante) claramente rotulado como
  referência — **os valores de investimento/retorno/faturamento da Lavansec não foram alterados**.

## Estrutura
```
NOVO-Lavan/
├── index.html        Landing de captação de franqueado (página principal)
├── maquinas.html     Linha de equipamentos Speed Queen
├── mercado.html      Dados de mercado (Sebrae, ANEL, ABRALAV)
├── sobre.html        A marca Lavansec + Alliance/Speed Queen
├── assets/
│   ├── css/novolavan.css
│   ├── js/novolavan.js
│   └── img/maquinas/  (extraídas do folder — trocar por renders oficiais quando possível)
├── Dockerfile        nginx estático (deploy)
├── nginx.conf
└── README.md
```

## Ver localmente
```bash
cd NOVO-Lavan
python -m http.server 8080
# abrir http://localhost:8080
```

## Subir no Easypanel

Repositório sugerido: **`lavansec-novo`**

> ⚠️ **Estrutura:** suba o **conteúdo de dentro** desta pasta para a **raiz** do repositório —
> o `Dockerfile`, `index.html`, `nginx.conf` e `assets/` precisam ficar na raiz, **não** dentro de
> uma subpasta `NOVO-Lavan/`. Caso contrário o Easypanel não encontra o Dockerfile.
>
> Raiz do repo deve ficar assim:
> ```
> lavansec-novo/
> ├── Dockerfile
> ├── nginx.conf
> ├── index.html
> ├── maquinas.html · mercado.html · sobre.html
> ├── assets/
> └── README.md · .gitignore
> ```

1. Crie o repositório `lavansec-novo` no GitHub e suba o conteúdo desta pasta na raiz.
2. No Easypanel: **App → Source = repositório `lavansec-novo` → Build = Dockerfile**.
3. **Porta interna 80**. Configure o domínio/box desejado.
4. Deploy. O site é 100% estático — sobe em segundos.

### Subir via linha de comando (opcional)
```bash
cd NOVO-Lavan
git init
git add .
git commit -m "NOVO Lavan — versão inicial"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/lavansec-novo.git
git push -u origin main
```

## Pendências / próximos passos
- [ ] Trocar as imagens de `assets/img/maquinas/` por **renders oficiais em alta** da Speed Queen.
- [ ] Validar com o Thiago se os formatos Lavansec ou os números Speed Queen vão para a versão final.
- [ ] Revisão jurídica das projeções antes de uso oficial (COF — Lei 13.966/2019).
- [ ] Conferir endereços atualizados das unidades.
