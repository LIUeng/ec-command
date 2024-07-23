# 命令行工具 ec

## Install

目前暂未发布到 npm 仓库

- git clone 项目地址
- npm run compile 构建项目
- npm link

## Usage

```shell
ec <command> [name] --help
```

## \<command>

### stash

开发中可能遇到过用 git stash 进行项目修复并开发，日积月累产生过多的 stashes，而目前 git stash drop \<stash> 支持单个删除

```shell
# 帮助命令
ec stash --help
ec stash [name] -n \>1
```

`drop`

> -n <string|number> 指定需要删除的 stash（支持单个，多个）

- 1 删除 1 的 stash
- \>1 删除大于（>=等于）1 的 stash
- \<1 删除小于（<=等于）1 的 stash
- 1..2 区间范围（删除包含 1 ~ 2 的 stash）

## ...
