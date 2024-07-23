# 命令行工具 ec

> 操作命令

```shell
ec --help
```

## stash

### 背景

开发中可能遇到过用 git stash 进行项目修复并开发，日积月累产生过多的 stashes

### drop

```shell
# 帮助命令
ec stash --help
# 删除大于1的 stash
ec stash drop -n \>1
```

- -n 删除
  - \>1 删除大于（>=等于）1 的 stash
  - \<1 删除小于（<=等于）1 的 stash
  - 1..2 区间范围（删除包含 1 ~ 2 的 stash）

## ...