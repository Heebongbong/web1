function NightDayHandler(self){
    if(self.value=='night'){
        $('body').css('backgroundColor','black');
        $('body').css('color', 'white');
        $('a').css("color", "red");
        self.value='day';
    }
    else{
        $('body').css('backgroundColor','white');
        $('body').css('color', 'black');
        $('a').css("color", "green");
        self.value='night';
    }
}