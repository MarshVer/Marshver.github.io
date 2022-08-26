---
title: linux学习笔记
date: 2022-08-17 18:22:04
tags: 
    - 学习笔记
    - 后端
summary: VM虚拟机中关于linux的学习笔记
---

# 一、下载VMware和Centos
> VMware16：https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html
> > VMware16密钥：
> > ZF3R0-FHED2-M80TY-8QYGC-NPKYF
> > YF390-0HF8P-M81RQ-2DXQE-M2UT6
> > ZF71R-DMX85-08DQY-8YMNC-PPHV8

Centos7-DVD：http://mirrors.aliyun.com/centos/7/isos/x86_64/

# 二、创建虚拟机并导入Centos
1. 典型-稍后安装操作系统

2. 选择客户机操作系统为红帽7：
![](https://s2.loli.net/2022/08/17/RoBmZ4x6Qg7I3yf.png)

3. 命名虚拟机名称-选择安装位置-20G、拆分成多个文件-自定义硬件

4. 自定义硬件只需根据自己的CPU选择合适的处理器数量和内核数量就行

打开任务管理器-性能，选择资源监视器：
![](https://s2.loli.net/2022/08/17/zGWJsqkhVciKAQa.png)

处理器全给，核数给一半：
![](https://s2.loli.net/2022/08/17/o4O1PKuCMbgFzIS.png)

5. 最后编辑虚拟机设置，将CD/DVD指向ISO映像文件：
![](https://s2.loli.net/2022/08/17/8mqIZHfFgWLoYeR.png)

6. 打开虚拟机install Centos，选择简体中文，选择软件选择：
![](https://s2.loli.net/2022/08/17/6fBGa43RsV2vC9K.png)

7. 选择安装目标位置，我要配置分区。
一般将linux分成三个区：/boot分区（引导分区），swap分区（交换分区），/（根分区）
/boot：1G；swap：与运存大小一致，2G；根分区（/）：剩余内存，17G
设备类型：标准分区
文件系统选择：ext4，swap，ext4

8. KDUMP实际运行开启，学习可关闭节约内存

9. 选择网络和主机名，启用并修改主机名即可完成
10. 开始安装，设置root密码（实际密码应较为复杂为好：https://suijimimashengcheng.bmcx.com/ ）并创建用户

# 三、网络连接的三种模式
1. 桥接模式：虚拟机网络地址和主机属于同一网段，可以与外部系统通讯，但是容易造成IP冲突
2. **NAT模式**：网络地址转换，可以与外部系统通讯（以主机地址为代理发送和接受信息），不容易造成IP冲突
3. 主机模式：独立系统，不予外部系统通讯

# 四、安装vmtools
VMtools通过主机建立文件夹再用虚拟机的共享文件夹与其链接，实现主机和虚拟机系统的共享操作。

1. 进入centos（root登录）
2. 虚拟机菜单重新安装vmtools
3. 打开光驱文件复制压缩包到**主文件夹-其他位置-计算机-opt**文件下
4. 使用解压命令 tar，得到一个安装文件
cd /opt (进入opt目录)
tar -zxvf VMwareTools-10.3.23-16594550.tar.gz(解压文件，可输入tar -zxvf VM+tab快速识别文件名，下面的操作同理，需要注意大小写)
5. 进入VM解压的目录
cd vmware-tools-distrib/
ls
6. 安装VMstolls
./vmware-install.pl
一直确定即可
7. 主机建立文件夹（myshare），虚拟机系统设置-选项，启用共享文件夹并设置位置为myshare的位置，myshare将出现在**主文件夹-其他位置-计算机-mnt-hgfs**的文件夹里

# 五、linux目录结构
linux一切皆文件

|文件名|存放的内容|
|-|-|
|**/bin**（/usr/bin,/usr/local/bin）|经常使用的指令（binary）|
|**/sbin** (/usr/sbin,/usr/local/sbin)|系统管理员使用的指令（super binary）|
|**/home**|存放普通用户的主目录，目录名是用户的账号名|
|**/root**|系统管理员的用户主目录|
|**/etc**|系统管理所需要的配置文件和子目录my.conf|
|**/usr**|用户的很多应用程序和文件都放在这个目录下，类似于Windows下的program files目录|
|**/boot**|linux系统启动的核心文件，包括链接文件和镜像文件|
|**/media**|linux自动识别一些设备，例如U盘，光驱等，当识别后，linux会把识别的设备挂载到这个目录下|
|**/mnt**|系统提供该目录为了让用户临时挂载别的文件系统，我们可以将外露的存储挂载在/,mt/上，然后进入该目录就可以查看里的内容了。d:/myshar|
|**/usr/local**|给主机额外安装软件所安装的目录，一般通过编译源码方式安装的程序|
|**/var**|存放着不断扩充者的东西，习惯将经常被修改的目录放在这个目录下。包括各种日志文件|
|/opt|给之际额外**安装软件**所摆放的目录，默认为空（安装包）|
|/lib|系统开机所需的最基本的动态连接共享库，作用类似于Windows里的DLL文件，几乎所有的应用程序都需要这些共享库|
|/lost+found|一般情况下是空的，系统非法关机后会生成一些文件|
|/tmp|存放临时文件|
|/dev|类似于windows的设备管理器，把所有硬件用文件的形式存储|
|/selinux|[security-enhanced linux]安全子系统，它能控制程序只能访问特定文件，有三种工作模式，可以自行设置|
|*/proc（不能动）*|虚拟的目录，存放系统内存的映射，访问这个目录获取系统信息|
|*/srv（不能动）*|服务启动之后需要提取的数据|
|*/sys（不能动）*|这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统sysfs|

# 六、远程登陆linux和传送文件

## 1.下载Xshell和Xftp
官网：https://www.xshell.com/zh/free-for-home-school/ 下载两者
百度网盘下载链接：https://pan.baidu.com/s/1t-XCh7OYZhPgYX1GHQJanA?pwd=1111 

## 2.查询linux系统ip地址
进入linux终端，输入ifconfig
ens33中的inet后面的就是IP地址，如：192.168.232.128

## 3.远程登录linux
1. 打开Xshell
2. 新建，名称随意，协议是ssh，主机设为IP地址，端口22-确定
3. 双击会话，接受并保存，输入root和密码

## 4.建立文件传输
1. 打开Xftp
2. 如3类似新建，协议是SFTP，端口22
3. 双击会话，输入root和密码
4. 如文件出现乱码，选择左上角>文件>当前会话属性>选项>编码换成utf-8
5. Xftp左大块是windows文件，又大块是linux文件

# 七、Vi和Vim
## 1.Vi和Vim常用的三种模式
终端vim+文件名（如hello.java）进入vim编辑。

* 正常模式（默认）
[上下左右]移动光标，[删除字符]或[删除整行]处理文档，[复制、粘贴]处理数据
* 插入模式
按下i/I、o/O、a/A、r/R等任何一个字母进入**编辑模式**，一般按**i**（insert）即可
* 命令行模式
输入ESC，再输入“:”，这个模式提供你相关指令，完成读取、存盘、替换、离开vim、显示行号等的动作。

命令行模式三种退出方式：
1. :wq(保存退出)
2. :q(退出不保存)
3. :q!(强制退出，不保存)

## 2.Vi和Vim常用的快捷键
* 拷贝当前行(yy)；拷贝当前向下3行(3yy)；粘贴(p)
* 删除当前行(dd)；删除当前向下3行(3dd)
* 查找某个单词[**命令行下** /关键字]，回车查找，输入n是查找下一个
* 显示/撤销行号[命令行下 :set nu/nonu]
* 编辑文件，使用快捷键到该文档的最末行(G)和最首行(gg)
* 撤销动作(u)
* 编辑文件。将光标移动到20行(20+shift+g)
* ...更多的可以查看文档

# 八、一些指令
## 关机和重启命令
|指令|指令说明|
|:---:|:---:|
|shutdown -h now|立刻关机|
|shutdown -h 1|1分钟后关机|
|shutdown |默认1分钟后关机|
|shutdown -r now|立即重启|
|halt|立即关机|
|reboot|立即重启|
|sync|内存数据同步到磁盘|

注：
* 重启和关机前，首先要运行sync，把内存同步到磁盘
* 目前的重启和关机指令已经在关机前进行了sync，但最好还是要运行一次sync

## 用户登录和注销
* 尽量少用root登录，普通用户输入“**su - root**”切换到root用户，或者“**su - 用户名**”切换到其他用户(切换用户后可用logout返回原来的用户)
* 提示符下输入logout即可注销用户

注：
* logout注销指令在图形运行级别无效，在 运行级别3下有效