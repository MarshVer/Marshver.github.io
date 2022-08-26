---
title: VScode中C和C++的环境配置
tags: 配置
abbrlink: 27168
date: 2022-07-05 10:22:25
summary: 在VScode中配置C和C++的运行环境
---

# VScode中配置C/C++
这是一个教程，（在windows 10中）为vscode配置C/C++的运行环境。

## 1.下载 VScode
首先，去 https://code.visualstudio.com/ 下载对应操作系统的VScode，下载稳定版本。

![](https://s2.loli.net/2022/08/03/RZea1UrwmcYdODA.png)

## 2.安装 VScode
全选和默认安装。

![](https://s2.loli.net/2022/08/03/7ztxYewrKACLPhn.png)

## 3.下载 Gcc编译工具
去 https://sourceforge.net/projects/mingw-w64/files/ 下载mingw-w64,下面是Windows版本。

![](https://s2.loli.net/2022/08/03/tF6avNq89VO4noH.png)


## 4.解压 Gcc
解压 gcc 到你喜欢的位置,例如C盘的根目录。

![](https://s2.loli.net/2022/08/03/IbtenwvsYdZES5y.png)

## 5.配置环境变量
为了让程序访问这些编译器，你需要添加gcc-bin文件夹的目录 (我的是 C: \mingw64 \ bin ,选择地址复制) 到用户变量Path中。
![](https://s2.loli.net/2022/08/03/A9qKemdkTcujgO8.png)
![](https://s2.loli.net/2022/08/03/HbkICMA7tT3hlOj.png)
![](https://s2.loli.net/2022/08/03/QmwbOLZMJUp164y.png)
![](https://s2.loli.net/2022/08/03/QzsNOWr8xq7HFL3.png)

现在证明一下是否配置成功，任意地方打开cmd，输入 gcc --version (中间有个空格), 点击确定, 如果看到如下的版本号，则证明配置成功。
![](https://s2.loli.net/2022/08/03/m9JecMhb4jXY2xo.png)

## 6.配置你的代码文件夹

在你喜欢的地方建一个文件夹名为CODE_ C,在这个文件夹中,你能放入你的C语言程序。如果你想放入其他语言的程序，可以新建一个新的文件夹。

![](https://s2.loli.net/2022/08/03/Pz7CN6BZWlVRDSr.png)

在 CODE_C 文件夹中，你可以创建两个文件夹 C_Single 和 C_Multiple。前面一个可以放单个小项目，后面一个可以放复杂的大项目。

![](https://s2.loli.net/2022/08/03/7d8qEPgsAUG4lwL.png)

## 7.配置VScode
打开你的VScode，并打开C_Single文件夹，新建如图文件夹和文件：

![](https://s2.loli.net/2022/08/03/j1zDhbCVXqEt3H9.png)

launch.json:
```json
{
    "version": "0.2.0",
    "configurations": [
        {//这个大括号里是我们的‘调试(Debug)’配置
            "name": "Debug", // 配置名称
            "type": "cppdbg", // 配置类型，cppdbg对应cpptools提供的调试功能；可以认为此处只能是cppdbg
            "request": "launch", // 请求配置类型，可以为launch（启动）或attach（附加）
            "program": "${fileDirname}\\bin\\${fileBasenameNoExtension}.exe", // 将要进行调试的程序的路径
            "args": [], // 程序调试时传递给程序的命令行参数，这里设为空即可
            "stopAtEntry": false, // 设为true时程序将暂停在程序入口处，相当于在main上打断点
            "cwd": "${fileDirname}", // 调试程序时的工作目录，此处为源码文件所在目录
            "environment": [], // 环境变量，这里设为空即可
            "externalConsole": false, // 为true时使用单独的cmd窗口，跳出小黑框；设为false则是用vscode的内置终端，建议用内置终端
            "internalConsoleOptions": "neverOpen", // 如果不设为neverOpen，调试时会跳到“调试控制台”选项卡，新手调试用不到
            "MIMode": "gdb", // 指定连接的调试器，gdb是minGW中的调试程序
            "miDebuggerPath": "C:\\mingw64\\bin\\gdb.exe", // 指定调试器所在路径，如果你的minGW装在别的地方，则要改成你自己的路径，注意间隔是\\
            "preLaunchTask": "build" // 调试开始前执行的任务，我们在调试前要编译构建。与tasks.json的label相对应，名字要一样
    }]
}
```
倒数第二个代码数据是你自己的gdb文件的位置，我的是 mingw64\\bin\\gdb.exe。

tasks.json:
```json

    "version": "2.0.0",
    "tasks": [
        {//这个大括号里是‘构建（build）’任务
            "label": "build", //任务名称，可以更改，不过不建议改
            "type": "shell", //任务类型，process是vsc把预定义变量和转义解析后直接全部传给command；shell相当于先打开shell再输入命令，所以args还会经过shell再解析一遍
            "command": "gcc", //编译命令，这里是gcc，编译c++的话换成g++
            "args": [    //方括号里是传给gcc命令的一系列参数，用于实现一些功能
                "${file}", //指定要编译的是当前文件
                "-o", //指定输出文件的路径和名称
                "${fileDirname}\\bin\\${fileBasenameNoExtension}.exe", //承接上一步的-o，让可执行文件输出到源码文件所在的文件夹下的bin文件夹内，并且让它的名字和源码文件相同
                "-g", //生成和调试有关的信息
                "-Wall", // 开启额外警告
                "-static-libgcc",  // 静态链接libgcc
                "-fexec-charset=GBK", // 生成的程序使用GBK编码，不加这一条会导致Win下输出中文乱码
                "-std=c11", // 语言标准，可根据自己的需要进行修改，写c++要换成c++的语言标准，比如c++11
            ],
            "group": {  //group表示‘组’，我们可以有很多的task，然后把他们放在一个‘组’里
                "kind": "build",//表示这一组任务类型是构建
                "isDefault": true//表示这个任务是当前这组任务中的默认任务
            },
            "presentation": { //执行这个任务时的一些其他设定
                "echo": true,//表示在执行任务时在终端要有输出
                "reveal": "always", //执行任务时是否跳转到终端面板，可以为always，silent，never
                "focus": false, //设为true后可以使执行task时焦点聚集在终端，但对编译来说，设为true没有意义，因为运行的时候才涉及到输入
                "panel": "new" //每次执行这个task时都新建一个终端面板，也可以设置为shared，共用一个面板，不过那样会出现‘任务将被终端重用’的提示，比较烦人
            },
            "problemMatcher": "$gcc" //捕捉编译时编译器在终端里显示的报错信息，将其显示在vscode的‘问题’面板里
        },
        {//这个大括号里是‘运行(run)’任务，一些设置与上面的构建任务性质相同
            "label": "run", 
            "type": "shell", 
            "dependsOn": "build", //任务依赖，因为要运行必须先构建，所以执行这个任务前必须先执行build任务，
            "command": "${fileDirname}\\bin\\${fileBasenameNoExtension}.exe", //执行exe文件，只需要指定这个exe文件在哪里就好
            "group": {
                "kind": "test", //这一组是‘测试’组，将run任务放在test组里方便我们用快捷键执行
                "isDefault": true
            },
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": true, //这个就设置为true了，运行任务后将焦点聚集到终端，方便进行输入
                "panel": "new"
            }
        }

    ]
}
```
第三行代码如果是配置C++的环境则改成g++（配置C++只有这一步与C不同，其他的跟配置C环境相同）。

## 8.最后
现在，你可以将vscode的快捷键设置为F4并编写C语言代码。按F4运行C语言代码，F5是dubug。

![](https://s2.loli.net/2022/08/03/kdxFJ2PjTeSAB4y.png)

运行C语言代码时，运行文件将显示在bin文件夹中。

![](https://s2.loli.net/2022/08/03/MUfF5iXSkvT1hJW.png)

## 现在开始你的编程之旅吧!