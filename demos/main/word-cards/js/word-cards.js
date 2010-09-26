var word_cards={

	init : function(){
		try{
			this.drop();
			localStorage.myWords="[]";
		}
		catch(e){
			return false;
		}
		return true;
	},

	drop : function(){
		try{
			delete localStorage.myWords;
		}catch(e){
			return false;
		}
		return true;
	},

	add : function(obj){
		var my_words=localStorage.getItem("myWords");
		var my_obj = JSON.parse(my_words); //[]

		if(obj.ja && obj.en){
			my_obj.push(obj);
			localStorage.setItem("myWords",JSON.stringify(my_obj));
		}
		return true;
	},

	gets : function(){
		var my_words=localStorage.getItem("myWords");
		var my_obj = JSON.parse(my_words);

		return my_obj;
	},

	clear : function(){
		try{
			localStorage.myWords=JSON.stringify([]);
		}catch(e){
			return false;
		}
		return true;
	}
};