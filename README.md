# Automiq — Website institucional

Website estático da Automiq, desenvolvido com HTML, CSS e JavaScript sem dependências externas. Foi preparado para funcionar em computador, tablet e telemóvel e pode ser publicado diretamente no GitHub Pages.

## Estrutura

```text
.
├── index.html
├── privacidade.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

## Funcionalidades

- HTML semântico e navegação por teclado;
- menu responsivo com suporte à tecla Escape;
- contraste elevado e estados de foco visíveis;
- respeito pela preferência `prefers-reduced-motion`;
- animações discretas sem bibliotecas;
- SEO básico, Open Graph, `robots.txt` e sitemap;
- favicon e imagem social em SVG, leves e escaláveis;
- Política de Privacidade dedicada;
- sem cookies, formulários, trackers ou dependências externas;
- compatível com GitHub Pages.

## Configuração atual

A versão entregue está configurada com:

- e-mail público: `automiq.apk@gmail.com`;
- utilizador GitHub: `automiqapk`;
- repositório: `Automatiq.github.io`;
- endereço previsto: `https://automiqapk.github.io/Automatiq.github.io/`;
- perfil GitHub: `https://github.com/automiqapk`;
- LinkedIn removido, conforme solicitado.

### Conteúdo e áreas de atuação

Os textos de serviços são deliberadamente gerais. Edite os blocos na secção `#servicos` de `index.html` para refletir apenas serviços realmente disponíveis. Não adicione clientes, números, testemunhos ou resultados que não possam ser confirmados.

### Cores

As cores principais estão no início de `css/styles.css`, dentro de `:root`. As variáveis mais relevantes são:

```css
--bg: #f2f0e9;
--dark: #0d1117;
--accent: #b8ff3d;
```

### Metadados e partilha social

Atualize a URL canónica e as propriedades `og:url` e `og:image` no `index.html`. Atualize também as URLs em `robots.txt` e `sitemap.xml`.

A imagem `assets/og-image.svg` funciona como recurso leve. Algumas plataformas sociais têm suporte limitado a SVG. Para máxima compatibilidade, exporte-a para PNG com 1200 × 630 píxeis e altere `og:image` para o novo ficheiro.

## Testar localmente

Pode abrir `index.html` diretamente no navegador. Para testar com um servidor local:

```bash
python3 -m http.server 8000
```

Depois, visite `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um novo repositório no GitHub.
2. Coloque todos os ficheiros deste projeto na raiz do repositório, mantendo as pastas.
3. Faça commit e envie os ficheiros para o ramo `main`.
4. No repositório, abra **Settings** → **Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Escolha o ramo `main`, a pasta `/ (root)` e clique em **Save**.
7. Aguarde a publicação e abra o endereço indicado pelo GitHub.
8. Substitua todas as URLs de exemplo pelo endereço final e volte a publicar.

## Checklist antes do lançamento

- [x] Endereço de correio eletrónico configurado;
- [x] Perfil GitHub configurado e LinkedIn removido;
- [x] URL canónica, Open Graph, sitemap e robots configurados;
- [ ] confirmar se as áreas de atuação correspondem à atividade real;
- [ ] rever a Política de Privacidade segundo as práticas reais;
- [ ] testar todas as ligações;
- [ ] testar navegação por teclado e em vários tamanhos de ecrã;
- [ ] converter a imagem Open Graph para PNG, se necessário;
- [ ] validar HTML e verificar o resultado num teste de acessibilidade.

## Privacidade

A versão entregue não usa cookies, analytics, formulários ou conteúdos incorporados. Se forem adicionados serviços de terceiros, a Política de Privacidade deverá ser revista e poderá ser necessário implementar consentimento. O texto fornecido é uma base informativa e não substitui aconselhamento jurídico.

## Licença e créditos

© Automiq. Todos os direitos reservados.  
Fundada por Tomás Silva.
