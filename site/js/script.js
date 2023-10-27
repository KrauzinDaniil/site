if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);
document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);
$.event.add( window,"load",function(){$.ready()});
$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');
$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';
script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};
script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;
$.includeStates[url]=true;if(callback)callback.call(script)};
script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];
setTimeout(function(){var valid=true;
$.each(dependency,function(k,v){if(!v()){valid=false;return false}});
if(valid)document.getElementsByTagName('head')[0].appendChild(script);
else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);
return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;
	imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});
	if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});

$.include('js/superfish.js')
$.include('js/jquery.hoverIntent.minified.js')
$.include('js/tms-0.4.1.js')
$.include('js/uCarousel.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.tools.min.js')
$.include('js/jquery.ui.totop.js')
$(function(){
	if($('#form').length)$.include('js/forms.js');
	$(".tabs-vert-right ul.tabs-nav").tabs(".tabs-vert-right .tab-content");	
	
})
/***************/
$(window).load(function(){
	$('.slider')._TMS({
		show:0,
		pauseOnHover:true,
		prevBu:'.prev',
		nextBu:'.next',
		playBu:false,
		duration:700,
		preset:'fade',
		pagination:true,
		pagNums:false,
		slideshow:8000,
		numStatus:false,
		banners:false,
		waitBannerAnimation:false,
		progressBar:false
	})
	$().UItoTop({ easingType: 'easeOutQuart' });
}) 
$(document).ready(function(){ 
  $('ul.sf-menu>li>a ').append("<em></em>");
  
  var board = $('<div>').addClass('board');
  

  var items = [
    { title: 'Зачисление на Коммерцию', description: 'Для зачисления на коммерческое обучение необходимо заключить договор и оплатить обучение', image: 'images/page3-img4.png',images: [] },
    { title: 'Заголовок объявления 2', description: 'Описание объявления 2', image: 'images/page3-img4.png', images: [] },
    { title: 'Заголовок объявления 3', description: 'Описание объявления 3', image: 'images/page3-img4.png',
	  images: ["images/page4-img10.jpg", "images/page4-img10.jpg"] }
  ];
  
  $.each(items, function(index, item) {

    var li = $('<div>').addClass('news_1');

	var another = $('<div>').addClass('wrapper_105');

	var other = $('<div>').addClass('aaaaaa');

	var image = $('<img>').addClass("logo_news").attr('src', item.image);

	other.append(image);


	var as = $('<div>').addClass('main_p')
    
	var title = $('<p>').addClass().text(item.title);

	as.append(title);

	another.append(other, as);
  
    var description = $('<p>').addClass('description').text(item.description);


    li.append(another, description);
	if(item.images.length != 0) {
		    
		for(let i = 0; i < item.images.length; i++) {
		    var image = $('<img>').addClass('asd').attr('src', item.images[i]);
			li.append(image);
	}
   };
   board.append(li);
   
  });


  $('.beard').append(board);




 var carous = $('<div>').addClass('carousel-1'); // first compound

 var itemGraduates = [
    { name: 'Греф Герман Оскарович', description: 'Окончил юридический факультет Омского государственного университета в 1990 году и в первое время работал преподавателем на факультетеЗатем осуществлял профессиональную деятельность в различных организациях и учреждениях г. Санкт-Петербурга.C 2000 по 2007 работа в Правительстве РФ, был первым Министром экономического развития и торговли Российской Федерации.С октября 2007 года по настоящее время занимает пост председателя правления Сбербанка России.,', image: 'images/Screenshot_1.jpg' },
	{ name: 'Бондарев Игорь Сергеевич', description: 'Окончил физический факультет в 1985 году.В органах госбезопасности работает с 1988 года.В его карьере - должности первого заместителя начальника УФСБ по Новосибирской области, начальника Управления ФСБ РФ по Ингушетии, начальника Управления ФСБ РФ по Омской области.С 2014 по 2018 год был заместителем председателя правительства Омской области.В настоящее время работает заместителем гендиректора по безопасности ОмПО «Радиозавод им. А.С. Попова». Генерал-майор ФСБ.', image: 'images/bond.jpg' },
	{ name: 'Золотарев Сергей Александрович', description: 'Окончил математический факультет (ИМИТ) ОмГУ в 1998 году.Директор ЗАО «Октан-Брокер».В 1997 году основал и возглавил компанию ЗАО «Октан-Брокер», которая сегодня входит в Инвестиционную группу «ОКТАН».Профессиональной деятельностью на фондовом рынке занимается с 1993 года. Компания под его руководством входит в ТОП-50 по оборотам на рынках Московской Биржи.', image: 'images/zolotarev.jpg' },
	{ name: 'Назаров Виктор Иванович', description: 'Окончил юридический факультет ОмГУ в 1988 году.Служил в органах прокуратуры Черлакского и Омского районов, был следователем военной прокуратуры, работал юристом в различных организациях.Был генеральным директором компании ЗАО «Омскрегионгаз» (с ноября 2010 года переименовано в ЗАО «Газпром межрегионгаз Омск»).В 2011 году избран депутатом Законодательного Собрания Омской области, являлся членом комитета по законодательству; заместителем председателя комитета по собственности.С 2012 г. по 2017 г. – занимал должность Губернатора Омской области.В настоящее время - член Совета Федерации Федерального собрания Российской Федерации.', image: 'images/nazarov.jpg' },
	{ name: 'Рыков Иван Юрьевич', description: 'В 2004 году окончил экономический факультет.Работал начальником отдела методологии и анализа процедур банкротства центрального аппарата Федеральной налоговой службы. Сопровождал процедуры банкротства более 1500 организаций, в том числе в качестве арбитражного управляющего.Президент Ассоциации специалистов по работе с проблемными активами. Председатель Комиссии по финансовой безопасности Совета ТПП РФ по финансово-промышленной и инвестиционной политике. Член рабочей группы Государственной Думы РФ по совершенствованию Федерального закона «О несостоятельности (банкротстве)».', image: 'images/rykov.jpg' },
	{ name: 'Голушко Андрей Иванович', description: 'В 1994 году окончил юридический факультет ОмГУ по специальности «Правоведение».В 2005 году защитил кандидатскую диссертацию в Академии народного хозяйства им. Плеханова (ныне — Российский экономический университет имени Г. В. Плеханова) и получил степень кандидата экономических наук.В 1994 году Андрей Голушко был избран депутатом Законодательного собрания и вскоре возглавил комитет по собственности.В мае 1997 года назначен первым заместителем председателя Правительства Омской области, курирующим финансовую сферу. После отставки работал председателем правления ООО «Холдинговая компания «Акция» до 2007 года. Параллельно занимался развитием калининградской компании «Бауцентр», где с 2005 по 2007 год был председателем совета директоров «Бауцентр-рус».В настоящее время - депутат Государственной думы Российской Федерации.', image: 'images/golyshko.jpg' },
	{ name: 'Бельская Людмила Владимировна', description: 'Выпускница химического факультета 2005 года.После окончания ОмГУ работала в родном вузе. Защитила кандидатскую диссертацию. Совместно с коллегами создала и возглавила компанию, которая разработала тест на онкологические заболевания по слюне.Людмила Владимировна является лауреатом «Зворыкинской премии» - 2013 в номинации «Биомедицинские технологии», победителем Омского регионального конкурса «Народный герой» 2016 года в номинации «Инновация».В настоящее время заведует научно-исследовательской лабораторией биохимии в ОмГПУ.', image: 'images/belskaya.jpg' }
	
    
  ];

  var innerUl = $('<ul>').addClass();

  $.each(itemGraduates, function(index, item) { 


	var elemLi = $('<li>').addClass(); // second component

	var divva  = $('<div>').addClass('box-3'); //third component 

    var image = $('<img>').addClass().attr('src', item.image); //image inner 

	var ina = $('<div>').addClass('button-wrapper');

	var parag = $('<p>').addClass().text(item.name);

    var anotherDiv = $('<div>').addClass('button_wrapper_next');

	var innerParag = $('<p>').addClass('desc' ).text(item.description);

    anotherDiv.append(innerParag);

	ina.append(parag, anotherDiv);

	divva.append(image, ina);

	elemLi.append(divva);

    innerUl.append(elemLi);

    });

	carous.append(innerUl);

	$('.carousel-1-block').prepend(carous);
    
    
	$('.carousel-1').uCarousel({show:4,buttonClass:'carousel-1-button', pageStep:1})

	

	 


	$('.desc').slideToggle(100);  

    $('.box-3 ').click(function() {
       
	   $(this.childNodes[1].childNodes[1].childNodes[0]).slideToggle(100);
	   $('#content').addClass('addHeight');
	 } ) 

    




	//docs 
   

	//bac
	var itemBacalaur = [ {link: "pravila_priema_bak_mag_2023.pdf", text: "Особенности приема на обучение по программам бакалавриата, программам специалитета, программам магистратуры и программам подготовки научных и научно-педагогических кадров в аспирантуре" },
	 {link: "informatciya_o_srokakh_provedeniia_priema_2023.pdf", text:"Особенности приема на обучение лиц, проходивших обучение за рубежом и вынужденных прервать его в связи с недружественными действиями иностранных государств"},
	{link: "osobennosti_2023_post_prav_omgu.pdf", text:"Информация о сроках проведения приема" },  
	{link: "osobennosti_2023_omgu.pdf", text:"Информация о предоставлении особых прав и особого преимущества по программам бакалавриата и программам специалитета, указанных в пунктах 24-31 Порядка приема на обучение по образовательным программам высшего образования – программам бакалавриата, программам специалитета, программам магистратуры" } ]

	var elemUl = $('<ul>').addClass('ulSpecial');

	$.each(itemBacalaur, function(index, item) {   
         
    
	var elemli = $('<li>').addClass('text-10');
	
	var a = $("<a>").attr("href", item.link).text( item.text);

	elemli.append(a);

	elemUl.append(elemli);

	} )

	$('.doc-box').append(elemUl);
   
	//mag

    var itemMagistr = [ {link: "mag/pravila_priema_bak_mag_2023.pdf", text: "Правила приема на обучение по образовательным программам высшего образования – программам бакалавриата, программам специалитета, программам магистратуры" },
	 {link: "osobennosti_2023_omgu.pdf", text:"Особенности приема на обучение лиц, проходивших обучение за рубежом и вынужденных прервать его в связи с недружественными действиями иностранных государств"},
	{link: "osobennosti_2023_post_prav_omgu.pdf", text:"Особенности приема на обучение лиц, проходивших обучение за рубежом и вынужденных прервать его в связи с недружественными действиями иностранных государств" },  
	{link: "informatciya_o_srokakh_provedeniia_priema_2023.pdf", text:"Информация о сроках проведения приема" } ]

	var elemUl = $('<ul>').addClass('ulSpecial');

	$.each(itemMagistr, function(index, item) {   
         
    
	var elemli = $('<li>').addClass('text-10');
	
	var a = $("<a>").attr("href", item.link).text( item.text);

	elemli.append(a);

	elemUl.append(elemli);

	} )

	$('.doc-box-mag').append(elemUl);




})


