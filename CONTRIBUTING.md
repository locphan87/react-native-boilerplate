# Contributing guidelines

If you find any problems, please open an issue or submit a fix as a pull request.

We welcome new features, but for large changes let's discuss first to make sure the changes can be accepted and integrated smoothly.

## Git

### Some Git rules

* Perform work in a feature branch.
* Branch out from `master`
* Never push into `master` branch. Make a Pull Request.
* Update your local `master` branch and do an interactive rebase before pushing your feature and making a Pull Request.
* Resolve potential conflicts while rebasing and before making a Pull Request.
* Delete local and remote feature branches after merging.
* Before making a Pull Request, make sure your feature branch builds successfully and passes all tests (including code style checks).

### Git workflow

* Checkout a new feature/bug-fix branch.

```
git checkout -b <branchname>
```

* Make Changes.

```
git add
git commit
```

* Sync with remote to get changes you’ve missed.

```
git checkout master
git pull
```

Update your feature branch with latest changes from `master`

```
git checkout <branchname>
git pull origin master
```

* Make a Pull Request.

* Pull request will be accepted, merged and close by a reviewer.

* Remove your local feature branch if you're done.

```
git branch -d <branchname>
```

### Writing good commit messages

* Separate the subject from the body with a newline between the two.
* Use the body to explain **what** and **why** as opposed to **how**.
* COMING SOON: We will use `commitizen` to standardize commit messages
