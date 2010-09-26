test("test of test", function() {
	ok(word_cards);
	ok(word_cards.init);
	ok(word_cards.drop);
	ok(word_cards.add);
	ok(word_cards.gets);
 	ok(word_cards.clear);
//後に 	ok(word_cards.del);
});


module("localStorage setup for init", {
    setup: function() {
		word_cards.drop();
    },
    teardown: function() {
    }
});

test("init_methods_test",function(){
	//initする前は、myWordsはない
	ok(!localStorage.myWords);
	word_cards.init();
	//initする前は、myWordsは空で存在
	same(localStorage.myWords,JSON.stringify([]),"initする前は、myWordsは空で存在");
	//same(localStorage.myWords,JSON.stringify({en:{},ja:{}}),"initする前は、myWordsは空で存在");
});

module("localStorage setup for drop");
test("drop_methods_test",function(){
	word_cards.init();
	word_cards.drop();
	ok(!localStorage.myWords);
});

module("localStorage setup for add", {
    setup: function() {
		word_cards.init();
	},
    teardown: function() {
		word_cards.drop();
    }
});

test("add_methods_test",function(){
	ok(word_cards.add({"en":"apple","ja":"りんご"}));
	var my_words=localStorage.getItem("myWords");
	var my_obj = JSON.parse(my_words);
	same(my_obj[0].en,"apple");
	same(my_obj[0].ja,"りんご");
});

module("localStorage setup for get", {
    setup: function() {
		word_cards.init();
		word_cards.add({"en":"apple","ja" : "リンゴ"});
		word_cards.add({"en":"orange" ,"ja" : "ミカン"});
		word_cards.add({"en":"banana","ja" : "ばなな"});
    },
    teardown: function() {
		word_cards.drop();
    }
});

test("gets_methods_test",function(){
	same(word_cards.gets().length,3);
	same(word_cards.gets(),[
	    {"en":"apple","ja" : "リンゴ"},
	    {"en":"orange" ,"ja" : "ミカン"},
	    {"en":"banana","ja" : "ばなな"}
			       ]);
});

module("localStorage setup for clear", {
    setup: function() {
		word_cards.init();
		word_cards.add({"en":"apple","ja" : "リンゴ"});
		word_cards.add({"en":"orange" ,"ja" : "ミカン"});
		word_cards.add({"en":"banana","ja" : "ばなな"});
    },
    teardown: function() {
		word_cards.drop();
    }
});

test("gets_methods_test",function(){
	word_cards.clear();
	same(localStorage.myWords,JSON.stringify([]));	
});


