# Manuscript (generado)

No edites estos ficheros a mano. Se regeneran con:

```bash
pnpm book
```

Fuente:

- `book/before.md` → frontmatter (*Antes de empezar*)
- `book/after.md` → backmatter (*Hasta aquí*)
- `README.md` → preguntas y respuestas
- `public/quiz/qa/*.json` → bloques *Pon a prueba* + solucionarios

### Syntax highlighting (PDF)

Leanpub usa **Pygments**. Los fences `jsx`/`tsx` se reescriben a
`javascript`/`typescript` porque muchas versiones de Leanpub no traen el
lexer JSX y el PDF sale sin color. Revisa en Generation Settings que el
syntax highlighting esté activado.

Sube la carpeta `manuscript/` a Leanpub (o sincroniza con Dropbox/Git según tu flujo).
