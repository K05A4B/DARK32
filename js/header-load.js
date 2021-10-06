headerload = {
    loadapi:function(url){
        $.ajax({
            url:　url,
            type: "GET",
            dataType: "json",
            success: function(data){
            }
        })
    }
}