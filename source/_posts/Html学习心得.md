---
title: Html学习笔记
tags: 
    - 学习笔记
    - 前端
abbrlink: 7721
date: 2022-07-27 22:01:45
summary: Html学习笔记
---

注：vscode添加注释用Alt+Shift+A注释所选内容，ctrl+/注释所选整行。
# 一、Web标准的构成

|标准|说明|
|---|---|
|结构|用于对**网页元素**进行整理和分类，html|
|表现|用于设置网页元素的版式、颜色、大小等**外观样式**，CSS|
|行为|指网页模型的定义及**交互**的编写，Javascript|

即结构写到Html文件中，表现写到CSS文件中，行为写到Javascript文件中；三者中 **结构** 最重要

# 二、基本结构标签
|标签名|定义|说明|
|---|---|---|
|html和/html|HTML标签|页面中最大的标签，我们称为 根标签|
|head和/head|文档的头部|注意在head标签中我们必须要设置的标签是title|
|title和/title|文档的标题|让页面拥有一个属于自己的网页标题|
|body和/body|文档的主体|元素包含文档的所有内容，页面内容基本都是放到body里面的|

vscode新建html文件，英文“!”,第一个自动创建基本结构如下：
```html
<!DOCTYPE html> <!-- 类型声明 -->
<html lang="zh-CN"> <!-- lang语言种类是zh-CN -->
<head>
    <meta charset="UTF-8"> <!-- 字符集是UTF-8(万国码) -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>创建的页面标题</title>
</head>
<body>
    主题内容
</body>
</html>
```

# 三、HTML常用标签
## 1.标题标签
\<h1\>-\<h6\>6个等级的标题标签
```html
<h1>一级标题<h1>
```

## 2.段落标签
```html
<p>段落标签</p>
```
段落内容随浏览器大小自动变化，段落与段落之间有间隙。

## 3.换行标签
```html
<br />换行标签
```
换行标签是单标签，行之间没有间隙。

## 4.文本格式化标签
```html
<strong>加粗</strong>   <!-- 也可用<b></b> -->
<em>倾斜</em>   <!-- 也可用<i></i> -->
<del>删除线<del>   <!-- 也可用<s></s> -->
<ins>下划线</ins>   <!-- 也可用<u></u> -->
```
推荐用前面的。

## 5.\<div\>和\<span\>标签
\<div\>和\<span\>没有语义，它们相当于一个盒子，用来装内容。
```html
<div>div独占一行</div>
<span>span之间一行显示，但之间有距离</span>
```

## 6.图像标签
```html
<img src="图像URL" />
```
img也是单标签，下面是其他属性：
|属性|属性值|说明|
|---|---|---|
|src|图片路径|**必须属性**|
|alt|文本|图像不能显示的文字|
|title|文本|鼠标放到图像上显示的文字|
|width|像素|图像的宽度|
|height|像素|图像的高度|
|border|像素|图像的边框粗细|

设置width或者height其中之一，另一个属性会等比例缩放。
border一般不通过html设定，而通过CSS来设定。

## 7.相对路径
|相对属性分类|符号|说明|
|-|-|-|
|同一级路径| |图像位于html文件同一级 如\<img src="hello.jpg" /\>|
|下一级路径|/|图像位于hyml文件下一级 \<img src="images/hello.jpg" /\>|
|上一级路径|../|图像位于html文件上一级 \<img src="../hello.jpg" /\>|

上一级如果出现多层嵌套则用../../.多层./hello.jpg

## 8.绝对路径
从盘符开始，如D:\MarshVer's Blog\source\_posts\Html学习心得\img.jpg。
```html
<img src="D:\MarshVer's Blog\source\_posts\Html学习心得\img.jpg" />
```
实际开发常用完整的图片网络地址。

## 9.超链接标签
```html
<a href="跳转目标" target="目标窗口的弹出方式"> 文本或图像 </a>
```
|属性|作业|
|-|-|
|href|指定链接目标的url地址，**必须属性**|
|target|指定连接打开方式，默认_self，可设置_blank在新窗口中打开|

* 外部链接href里跳转的目标是网址，网址需要从 **http://** 开始
* 内部链接href里跳转的目标是本地html文件的相对地址，
* 空链接href里填写#临时替代，
* 下载链接href填写的是文件就是下载文件（.exe，.zip等）。

## 10.锚点链接
锚点链接可以快速定位到页面的某个位置。
* 在链接文本的href属性中，设置属性值为 **#名字** 的形式，如 \<a href="#two"\> 锚点\</a\>
* 找到目标位置标签，里面添加一个 **id属性**，如\<h3 id="two"\>锚点介绍\</h3\>

锚点链接类似于超链接标签，只是href里的内容不同，同时还需要在跳转的目的字段加入id属性。


## 11.特殊字符
html文件中的某些特殊字符可能无法显示，需要用特定的代码代替，常用的如下：
|特殊字符|描述|字符的代码|
|-|-|-|
|\<|小于号|\&lt;|
|\>|大于号|\&gt;|
| |空格符|\&nbsp;|

# 四、表格标签
## 1.表格相关标签
### (1)表格标签基本结构
```html
<table>
    <tr>
        <td>单元格内的文字</td>
        ...
    </tr>
    ...
</table>
```
* \<table\>\</table\>定义表格
* \<tr\>\</tr\>定义表格中的行，必须嵌套在\<table\>\</table\>中
* \<td\>\</td\>定义表格中的单元格，必须嵌套在\<tr\>\</tr\>中

### (2)表头单元格标签
```html
<table>
    <tr>
        <th>单元格内的文字</th>
        ...
    </tr>
    ...
</table>
```
表头单元格位于第一行或第一列，其内容默认加粗居中显示。

### (3)表格结构标签
在表格标签中，分别用：**\<thead\>\</thead\>**标签**表格的头部区域**；**\<tbody\>\</tbody\>**标签**表格的主题区域**,这样更好的分清表格结构。

\<thead\>内部必须拥有\<tr\>标签，位于第一行。

## 2.表格属性
### (1)一般属性
表格属性实际不常用，一般在CSS中设置。

|属性名|属性值|描述|
|-|-|-|
|align|left，center、right|表格对齐方式|
|border|1或""|单元格是否有边框，默认没有|
|cellpadding|像素值|单元格边缘与其内容的距离，默认1像素|
|cellspacing|像素值|单元格之间的距离，默认2像素|
|width|像素值或百分比|表格宽度|

### (2)合并单元格属性
* 跨行合并：rowspan="合并单元格的个数"（写在上测单元格）
* 跨列合并：colspan="合并单元格的个数"（写在左侧单元格）
合并单元格个数包括自己，作为单元格的属性。

合并单元格三部曲：
* 确定跨行还是跨列
* 找到目标单元格，写上合并方式=合并的单元格的数量如：\<td colspan="2"\>单元格内容\</td\>
* 删除多余的单元格

# 五、列表标签
列表最大的特点就是整齐、整洁、有序。它作为布局会更加自由和方便。

## 1.无序列表（重点）
```html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    ...
</ul>
```
\<ul\>\</ul\>中只能嵌套\<li\>\</li\>，但\<li\>\</li\>中可以容纳所有元素。

无序列表有自己的属性，但实际一般会使用CSS来设置

## 2.有序列表
\<ol\>\</ol\>标签用于定义有序列表，列表排序已数字显示，使用\<li\>\</li\>标签定义列表项。

其他与无序列表一样。

## 3.自定义列表（重点）
自定义列表常用于对术语或名词进行解释和描述。
```html
<dl>
    <dt>名词1</dt>
    <dd>名词1解释1</dd>
    <dd>名词1解释2</dd>
</dl>
```
\<dl\>\</dl\>里面只能有\<dt\>\</dt\>和\<dd\>\</dd\>
一个\<dt\>\</dt\>对应多个\<dd\>\</dd\>

## 4.表单标签
表单用于收集用户信息。

### (1)表单域
\<form\>\</form\>会把它范围内的表单元素信息提交给服务器。
```html
<form action="url地址" method="提交方式" name="表单域名称">
    各种表单元素控件
</form>
```
|属性|属性值|作用|
|-|-|-|
|action|url地址|指定接收并处理表单数据的服务器程序的url地址|
|method|get/post|设置表单数据的提交方式|
|name|名称|指定表单名称|

### (2)表单控件（元素）
1.input输入表单元素(单标签)
2.select下拉表单元素
3.textarea文本域元素

#### 1)input的一些类型
```html
<form>
    用户名：<input type="text"> <br>
    <!-- text 文本框 用户可以输入任何文字 -->
    密码：<input type="password"> <br>
    <!-- password 密码框 用户看不见输入的密码 -->
    性别：男<input type="radio">  女<input type="radio"> <br>
    <!-- radio 单选按钮 可以实现多选一 -->
    爱好：吃饭<input type="checkbox" > 睡觉<input type="checkbox" > 打游戏<input type="checkbox" > <br>
     <!-- checkbox 复选按钮 可以实现多选 -->
</form>
```
#### 2)input的重要属性
|属性|属性值|描述|
|-|-|-|
|name|自定义|定义input元素的名称|
|value|自定义|规定input元素的值|
|checked|checked|规定首次加载时默认被选中|
|maxlength|正整数|规定输入字符的最大长度|

**注：**
* name属性在radio和checkbox中应相同才能实现各自的功能。
* value值在radio和checkbox中应赋值，这样导入后台才能被识别。
* type，name和value必须填，name和value主要针对后台人员使用。

#### 3)input的其他属性
|属性|描述|
|-|-|
|text|定义一行文本可输入数据|
|button|定义可点击按钮（多数情况下通过Javascript启动脚本）|
|file|定义输入字段和“浏览”按钮，供文件上传|
|*hidden*|定义颖仓的输入字段|
|*image*|定义图像形式的提交按钮|
|reset|定义重置按钮，清空表单中的所有数据|
|submit|定义提交按钮，把表单数据发送到服务器|

#### 4)label标签
label标签用于绑定一个表单元素，当点击label标签内的文本，即可选定。
```html
<label for="sex">男</label>
<input type="radio" name="sex" id="sex" >
<!-- label的for属性值与input的id值相同 -->
```

#### 5)select标签
select定义下拉列表。
```html
<select>
    <option selected="selected">选项1</option> <!-- 设置selected为默认选择项 -->
    <option>选项2</option>
    <option>选项3</option>
    ...
</select>
```

#### 6)textarea标签
textarea定义大量内容的文本框。
```html
<textarea rows="3" cols="20">
<!-- row和cols在实际开发基本不用，都是用CSS来改变大小 -->
    默认文本内容
</textarea>
```
更多html内容请查看W3C文档说明：https://www.w3school.com.cn/html/index.asp