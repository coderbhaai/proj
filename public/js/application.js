$(document).ready(function (){
// Clients --------------------------------------------------------------
    // Get Client data for editing 
        $('.client-edit-btn').on('click', function (){
            var client_sel = $(this).data('id');
            if (client_sel) {
                $.ajax({
                    type: "GET",
                    url: "/get_client_data?id="+client_sel,
                    success: function (res) {
                        if (res) {
                            $.each(res, function () {
                                $("#edit-client-name").val(res.c_name); 
                                $("#edit-client-uid").val(res.uid);
                                $("#edit-client-web").val(res.c_web);
                                $("#edit-client-remarks").val(res.remarks);
                                $("#edit-client-logo").empty();
                                $("#edit-client-logo").append('<img src="../../storage/app/public/clients/'+res.c_logo+'" class="img-responsive" /><label>Logo</label><input type="file" name="c_logo">');
                            });
                        }
                        if(res.seo == "on"){
                            $("#edit-client-seo").empty();
                            $("#edit-client-seo").html('<label style="padding-right: 10px;"><input type="checkbox" name="seo" checked> SEO </label>')
                        }else{
                            $("#edit-client-seo").empty();
                            $("#edit-client-seo").html('<label style="padding-right: 10px;"><input type="checkbox" name="seo"> SEO </label>')
                        }

                        if(res.smm == "on"){
                            $("#edit-client-smm").empty();
                            $("#edit-client-smm").html('<label style="padding-right: 10px;"><input type="checkbox" name="smm" checked> SMM </label>')
                        }else{
                            $("#edit-client-smm").empty();
                            $("#edit-client-smm").html('<label style="padding-right: 10px;"><input type="checkbox" name="smm"> SMM </label>')
                        }

                        if(res.graphics == "on"){
                            $("#edit-client-graphics").empty();
                            $("#edit-client-graphics").html('<label style="padding-right: 10px;"><input type="checkbox" name="graphics" checked> Graphics</label>')
                        }else{
                            $("#edit-client-graphics").empty();
                            $("#edit-client-graphics").html('<label style="padding-right: 10px;"><input type="checkbox" name="graphics"> Graphics</label>')
                        }

                        if(res.website == "on"){
                            $("#edit-client-website").empty();
                            $("#edit-client-website").html('<label style="padding-right: 10px;"><input type="checkbox" name="website" checked> Website</label>')
                        }else{
                            $("#edit-client-website").empty();
                            $("#edit-client-website").html('<label style="padding-right: 10px;"><input type="checkbox" name="website"> Website</label>')
                        }

                        if(res.c_country == "on"){
                            $("#edit-client-int").empty();
                            $("#edit-client-int").html('<label><input type="checkbox" name="c_country" checked> International? </label>')
                        }else{
                            $("#edit-client-int").empty();
                            $("#edit-client-int").html('<label><input type="checkbox" name="c_country"> International? </label>')
                        }
                    }
                });
            }
        });

// Accounts --------------------------------------------------------------
    // Add Hidden Accounts Fields
        $('.add-account').on('click', function () {
            var addAccount = $('.hidden_accounts').html();
            $('.add-hf-accounts').append(addAccount);
        });
    // Remove Added Accounts Fields
        $(".add-hf-accounts").on("click", ".remove", function () {
            $(this).closest(".hidden_event").remove();
        });

    // Add Active in Password tab panel 
        window.onload = function() {
            $(".tab-content div:first").addClass("active");
            $('.tabs li a:first').addClass('active');
        }

    // Get Client data for editing 
        $('.password-edit-btn').on('click', function (){
            var client_sel = $(this).data('id');
            if (client_sel) {
                $.ajax({
                    type: "GET",
                    url: "/get_password_data?id="+client_sel,
                    success: function (res) {
                        if (res) {
                            // console.log(res.credential);
                            $("#edit-password-id").empty(); 
                            $("#edit-password-id").val(res.id); 
                            $("#edit-password-client").empty(); 
                            $("#edit-password-client").append('<option value="'+ res.client +'">'+ res.client +'</option>'); 
                            $('#edit-password-remarks').val(res.remarks);
                        }

                        if (res.credential) {
                            $(".add-hf-accounts").empty();
                            $.each(JSON.parse(res.credential), function (key, value) {
                                $(".add-hf-accounts").append('<div class="hidden_event"><div class="form-group col-sm-2"><label>Account</label><select class="form-control" name="account[]"><option value="'+ value[0] +'"> '+ value[0] +'</option></select></div><div class="form-group col-sm-3"><label>URL</label><input type="text" class="form-control" placeholder="Accoutn URL" name="url[]" value="'+ value[1] +'"></div><div class="form-group col-sm-3"><label>Username</label><input type="text" class="form-control" placeholder="User Name" name="user[]" value="'+ value[2] +'"></div><div class="form-group col-sm-3"><label>Password</label><input type="text" class="form-control" placeholder="Password" name="password[]" value="'+ value[3] +'"></div><div class="form-group col-sm-1 acc-btn"> <br><button class="btn btn-danger remove " type="button"><i class="glyphicon glyphicon-remove"></i></button></div></div>');
                            });
                        }
                    }
                });
            }
        });   
        
    // Get Coding data for editing
        $('.code-edit-btn').on('click', function (){
            var client_sel = $(this).data('id');
            if (client_sel) {
                $.ajax({
                    type: "GET",
                    url: "/get_codes_data?id="+client_sel,
                    success: function (res) {
                        if (res) {
                            console.log(JSON.stringify(res.ans));
                            $("#edit-lang-name").empty(); 
                            $("#edit-lang-name").append('<option value="'+ res.uid +'">'+ res.uid +'</option>'); 
                            $("#edit-lang-quest").empty(); 
                            $('#edit-lang-quest').val(res.quest);
                            $("#article-ckeditor2").empty(); 
                            $('#article-ckeditor2').val(res.ans);
                            // $('.edit-lang-ans').val(JSON.stringify(res.ans));
                            // $('.edit-lang-ans').html(res.ans);
                            // $('.edit-lang-ans').append('<textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Add Answer" name="ans" value="'+res.ans+'" id="article-ckeditor2"></textarea>');
                        }
                    }
                });
            }
        });


    


// Document Start block ends here
});
