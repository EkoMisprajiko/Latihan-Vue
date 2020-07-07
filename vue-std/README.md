# README

This is a standard new vue project with tailwind css

### What is this repository for?

This project is intended to be a standard boilerplate for vue project

### How do I get set up?

Clone from repository

```
git clone https://siswantoalmatin@bitbucket.org/siswantoalmatin/vue-std.git
```

npm install

```
npm install
```

or

```
yarn install
```

npm run serve

```
npm run serve
```

for lint checking

```
npm run lint
```

for build

```
npm run build
```

### Code Conventions

- All axios requests will be in src/api folder
- Every axios requests always return response ( no further config / formatting )
- Formatting response will always be done in components / views

- All states will be manages in src/store folder
- States mutation always using commit
- Function call in store, always using dispatch

- All pages will be in src/views
- All components ( not full page ) will be in src/components
- States from store will always be in computed: {}
- date() { /_ will only used for local state for this component/view only _/ }

- v-for
- v-if

- for local <style>, can define custom css class for simplify template

### Todo before build

- Check lint

### Todos

- [] check for default tailwind templating
- [] check for other lint rules, then the warnings/errors are not important, ignore them
- [] check for any other better approach
