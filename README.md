# Skeleton Frontend

Boilerplate frontend project. Basic configuration for happy use of: 

`javascript` / `yarn` / `webpack` / `babel` / `eslint` / `sass`


## Usage

Once you have cloned skeleton, you need to change git origin:

```bash
git remote rm origin
git remote add origin git@github.com:username/repository.git
git config master.remote origin
git config master.merge refs/heads/master
```
This is your project now, captain. You can modify it as you wish and then push changes to your own repository:

```bash
git push -u origin master
```


## Commands

**Build project:**

```bash
npm run build
```

It will create `build/` folder.

**Start dev server:**

```bash
npm run dev
```

It will run development server on http://localhost:8888


Happy coding!