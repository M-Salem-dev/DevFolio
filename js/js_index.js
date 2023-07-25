
// $(function(){	//ده بتشتغل بترتيب 
// $(".progress85").animate( {width:'85%'} , 1000 , function(){
	// $(".progress75").animate( {width:'75%'} , 1000 , function(){
		// $(".progress50").animate( {width:'50%'} , 1000 , function(){
			// $(".progress90").animate( {width:'90%'} , 1000);
		// });
	// });
// });
// }())

let skillOffset = $("#About").offset().top;
let WorkOffset = $("#Work").offset().top;

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > skillOffset -100){
			startAbout();
		}
		
		if(wScroll > WorkOffset -400){
			startCounter();	//يبتدا عد الارقام Workده علشان لم انزل عند ال
		}
})


function startAbout(){
	$(".progress85").animate( {width:'85%'} , 2000);
	$(".progress75").animate( {width:'75%'} , 2000);
	$(".progress50").animate( {width:'50%'} , 2000);
	$(".progress90").animate( {width:'90%'} , 2000);
}

//يبتدا عد الارقام Workده علشان لم انزل عند ال
function counterUp(element , limit , speed)//تحت في الكول elementهنا وابقي اكتب ال elementكتبت كلمه 
{
	let counter = 1;
	
	let x = setInterval(()=>{
		counter++;	//هو كده كل مره بيذود 1
		$(element).html(counter)//هنا وبنادي عليا تحت في الكول elementانا بكتب ال
	
		if(counter == limit)// وابقي اكتب رقم اللي هيقف عند تحت في الكول limitكتبت ال
		{
			clearInterval(x)//
		}
	},speed);//واكتب الرقم الثواني تحت في الكول prermtl بدل م ادي رقم بكتب 
}
function startCounter(){
counterUp(".WORKS1", 40, 100 )
counterUp(".WORKS2", 15, 100 )
counterUp(".WORKS3", 100, 100 )
counterUp(".WORKS4", 60, 100 )
}