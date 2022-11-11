var image = new Array();			//声明数组用来存储要轮播图片的地址
image[0] = "lunbo1.jpg";
image[1] = "lunbo2.jpg";			//为数组中每一个元素赋值图片的地址
image[2] = "lunbo3.jpg";

document.getElementById("change").src = image[0];//初始化图片

var items = document.getElementById("num").getElementsByTagName("li");//定义序号数组
items[0].className = "active";//初始化序号
var i = -1;							//用来迭代图片次序的变量
function changeImg(){				//定义更改img标签中src属性的函数
    i = (i + 1) % image.length;		//递增变量，用来指向下一张图片,并使变量不大于图片的数量
    document.getElementById("change").src = image[i];//更改src属性

    exI();
}
var b = self.setInterval("changeImg()", 3000);//定时执行函数
function last(){
    self.clearInterval(b);						//清除计时
    i = (i + image.length - 1) % image.length;	//对变量进行递减操作
    document.getElementById("change").src = image[i];//替换图片
    exI();
    b = self.setInterval("changeImg()", 3000);
}
function next(){
    self.clearInterval(b);
    i = (i + 1) % image.length;
    document.getElementById("change").src = image[i];

    exI();
    b = self.setInterval("changeImg()", 3000);
}
function jump(k){//接收li标签的位置
    self.clearInterval(b);//清除计时
    i = k;//将选中的序号赋值给i
    document.getElementById("change").src = image[i];//替换图片

    exI();//改变序号显示
    b = self.setInterval("changeImg()", 3000);//重新开始计时
}
function exI(){
    for(var j = 0; j < items.length; j++){
        items[j].className = "";
        if(i == j)
            items[i].className = "active";
    }
}
