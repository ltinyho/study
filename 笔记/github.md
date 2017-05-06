## 问题
* git config --global user.name "liu951919064"//给自己起个用户名
* git config --global user.email  "951919064@qq.com"//填写自己的邮箱
* fatal: Unable to create 'C:/Users/刘子豪/Desktop/test/Person-Practice/.git/index.lock': File exists.
	解决办法：rm  ./.git/index.lock
* git commit 必须写描述 
	解决办法: git commit "描述"

* git add . 添加文件到本地仓库
* git status 查看本地状态
* git log 查看提交日志
* git reset --hard cflffe
	hard后为commit的前六位嘻哈值 
* git remote 不带参数，列出已经存在的远程分支
* git remote -v | --verbose列出详细信息，在每一个名字后面列出其远程url
* git remote add [shortname] [url]:

* 生成sshkey
	ssh-keygen -t rsa -b 4096 -C "951919064@qq.com"
* 找到id_rsa.pub的文件，复制其中的文字到官网的ssh中