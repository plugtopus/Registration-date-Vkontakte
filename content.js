var uid = 0;
var drs = "NaN";
var myid = 0;

function dlR() {
    if (document.getElementById("ads_left")) {
        document.getElementById("ads_left").style.display = "none";
    };
    if (document.getElementById("ya_direct")) {
        document.getElementById("ya_direct").style.display = "none";
    };
}

function gtUI() {
    if (document.getElementById("profile")) {
        if (document.getElementById("profile_photo_link")) {
            var profile_photo_link = (document.getElementById("profile_photo_link"));
            if (profile_photo_link.href.length) {
                var ppl = ((profile_photo_link).href);
                var t1 = ppl.indexOf("hoto");
                if (t1 !== -1) {
                    var str1 = ppl.substr((t1 + 4), 32);
                    var t2 = str1.indexOf("_");
                    var str2 = str1.substr(0, t2);
                    uid = parseInt(str2);
                    if ((uid !== uid) || (uid === undefined)) {
                        uid = 0;
                    };
                }
            } else if ($(profile_photo_link).find("img").length > 0) {
                var imgs = $(profile_photo_link).find("img");
                var len = imgs.length;
                if (len > 0) {
                    var ppl = imgs.first().attr("src");
                    var t1 = ppl.indexOf("vk.me");
                    if (t1 !== -1) {
                        var str1 = ppl.substr((t1 + 7), 12);
                        var t2 = str1.indexOf("/");
                        var str2 = str1.substr(0, t2);
                        uid = parseInt(str2);
                        if ((uid !== uid) || (uid === undefined)) {
                            uid = 0;
                        };
                    };
                }
            };
        };
        if (uid === 0) {
            if (document.getElementById("profile_send_gift_btn")) {
                var url = document.getElementById("profile_send_gift_btn");
                if (url.hasAttribute("onclick")) {
                    uid = parseInt((url.getAttributeNode('onclick').value.replace(/[^0-9]/g, "")));
                    if ((uid !== uid) || (uid === undefined)) {
                        uid = 0;
                    };
                };
            };
        }
        if (uid === 0) {
            var link_str = (window.location.toString());
            var pos = link_str.indexOf("com/id");
            if (pos !== -1) {
                uid = parseInt(link_str.substr(pos + 6));
                if ((uid !== uid) || (uid === undefined)) {
                    uid = 0;
                };
            };
        }
        if (uid === 0) {
            if ($(".page_actions_item").length !== 0) {
                $("body").find(".page_actions_item").each(function() {
                    var box = $(this);
                    if ($(box).html().indexOf("Пожалов") !== -1) {
                        if (($(box).attr("onClick")).length !== 0) {
                            var klik = $(box).attr("onClick");
                            var pos1 = (klik.indexOf("oid: "));
                            pos1 += 5;
                            var pos2 = (klik.indexOf("}"));
                            uid = parseInt(klik.substring(pos1, pos2));
                            if ((uid !== uid) || (uid === undefined)) {
                                uid = 0;
                            };
                        }
                    };
                });
            }
        }
        if ((uid !== uid) || (uid === undefined)) {
            uid = 0;
        };
        if (document.getElementById("l_ph")) {
            var photo_btn = document.getElementById("l_ph");
            if (photo_btn.getElementsByTagName('a').length) {
                var url = (photo_btn.getElementsByTagName('a')[0]);
                myid = parseInt((url.href).replace(/[^0-9]/g, ""));
            }
        };
    };
};

function gtDR() {
    if (document.getElementById("profile")) {
        var q1 = "01.",
            q2 = "02.",
            q3 = "03.",
            q4 = "04.",
            q5 = "05.",
            q6 = "06.",
            q7 = "07.",
            q8 = "08.",
            q9 = "09.",
            q10 = "10.",
            q11 = "11.",
            q12 = "12.";
        if (uid == 0) {
            if (myid == 0) {
                drs = ("видна только пользователям ВК");
            } else {
                drs = ("не определено");
            };
        } else {
            if (uid < 179500514) {
                if (uid < 44900000) {
                    if (uid < 7100000) {
                        if (uid < 370000) {
                            if (uid < 13600) {
                                if (uid < 14) {
                                    drs = (q9 + 2006);
                                } else if (uid < 21) {
                                    drs = (q10 + 2006);
                                } else if (uid < 1090) {
                                    drs = (q11 + 2006);
                                } else if (uid < 13600) {
                                    drs = (q12 + 2006);
                                }
                            } else {
                                if (uid < 53500) {
                                    drs = (q1 + 2007);
                                } else if (uid < 107000) {
                                    drs = (q2 + 2007);
                                } else if (uid < 210000) {
                                    drs = (q3 + 2007);
                                } else if (uid < 370000) {
                                    drs = (q4 + 2007);
                                }
                            }
                        } else {
                            if (uid < 2200000) {
                                if (uid < 590000) {
                                    drs = (q5 + 2007);
                                } else if (uid < 885000) {
                                    drs = (q6 + 2007);
                                } else if (uid < 1200000) {
                                    drs = (q7 + 2007);
                                } else if (uid < 1580000) {
                                    drs = (q8 + 2007);
                                } else if (uid < 2200000) {
                                    drs = (q9 + 2007);
                                }
                            } else {
                                if (uid < 3070000) {
                                    drs = (q10 + 2007);
                                } else if (uid < 4150000) {
                                    drs = (q11 + 2007);
                                } else if (uid < 5350000) {
                                    drs = (q12 + 2007);
                                } else if (uid < 7100000) {
                                    drs = (q1 + 2008);
                                }
                            }
                        }
                    } else {
                        if (uid < 21800000) {
                            if (uid < 15450000) {
                                if (uid < 8900000) {
                                    drs = (q2 + 2008);
                                } else if (uid < 10900000) {
                                    drs = (q3 + 2008);
                                } else if (uid < 12550000) {
                                    drs = (q4 + 2008);
                                } else if (uid < 14050000) {
                                    drs = (q5 + 2008);
                                } else if (uid < 15450000) {
                                    drs = (q6 + 2008);
                                }
                            } else {
                                if (uid < 16700000) {
                                    drs = (q7 + 2008);
                                } else if (uid < 18100000) {
                                    drs = (q8 + 2008);
                                } else if (uid < 19800000) {
                                    drs = (q9 + 2008);
                                } else if (uid < 21800000) {
                                    drs = (q10 + 2008);
                                }
                            }
                        } else {
                            if (uid < 34600000) {
                                if (uid < 24100000) {
                                    drs = (q11 + 2008);
                                } else if (uid < 26550000) {
                                    drs = (q12 + 2008);
                                } else if (uid < 29400000) {
                                    drs = (q1 + 2009);
                                } else if (uid < 31900000) {
                                    drs = (q2 + 2009);
                                } else if (uid < 34600000) {
                                    drs = (q3 + 2009);
                                }
                            } else {
                                if (uid < 37300000) {
                                    drs = (q4 + 2009);
                                } else if (uid < 39900000) {
                                    drs = (q5 + 2009);
                                } else if (uid < 42300000) {
                                    drs = (q6 + 2009);
                                } else if (uid < 44900000) {
                                    drs = (q7 + 2009);
                                }
                            }
                        }
                    }
                } else {
                    if (uid < 119600733) {
                        if (uid < 81800003) {
                            if (uid < 63500003) {
                                if (uid < 49200000) {
                                    drs = (q8 + 2009);
                                } else if (uid < 52100003) {
                                    drs = (q9 + 2009);
                                } else if (uid < 55700003) {
                                    drs = (q10 + 2009);
                                } else if (uid < 59500003) {
                                    drs = (q11 + 2009);
                                } else if (uid < 63500003) {
                                    drs = (q12 + 2009);
                                }
                            } else {
                                if (uid < 68200003) {
                                    drs = (q1 + 2010);
                                } else if (uid < 72400003) {
                                    drs = (q2 + 2010);
                                } else if (uid < 77500003) {
                                    drs = (q3 + 2010);
                                } else if (uid < 81800003) {
                                    drs = (q4 + 2010);
                                }
                            }
                        } else {
                            if (uid < 95900003) {
                                if (uid < 85300003) {
                                    drs = (q5 + 2010);
                                } else if (uid < 88700003) {
                                    drs = (q6 + 2010);
                                } else if (uid < 92200003) {
                                    drs = (q7 + 2010);
                                } else if (uid < 95900003) {
                                    drs = (q8 + 2010);
                                }
                            } else {
                                if (uid < 100400003) {
                                    drs = (q9 + 2010);
                                } else if (uid < 106100003) {
                                    drs = (q10 + 2010);
                                } else if (uid < 113000733) {
                                    drs = (q11 + 2010);
                                } else if (uid < 119600733) {
                                    drs = (q12 + 2010);
                                }
                            }
                        }
                    } else {
                        if (uid < 149050513) {
                            if (uid < 138200733) {
                                if (uid < 127170733) {
                                    drs = (q1 + 2011);
                                } else if (uid < 134670733) {
                                    drs = (q2 + 2011);
                                } else if (uid < 138240733) {
                                    drs = (q3 + 2011);
                                } else if (uid < 136470733) {
                                    drs = (q4 + 2011);
                                } else if (uid < 138200733) {
                                    drs = (q5 + 2011);
                                }
                            } else {
                                if (uid < 139900733) {
                                    drs = (q6 + 2011);
                                } else if (uid < 142500733) {
                                    drs = (q7 + 2011);
                                } else if (uid < 145600733) {
                                    drs = (q8 + 2011);
                                } else if (uid < 149050513) {
                                    drs = (q9 + 2011);
                                }
                            }
                        } else {
                            if (uid < 166100514) {
                                if (uid < 152650513) {
                                    drs = (q10 + 2011);
                                } else if (uid < 155100514) {
                                    drs = (q11 + 2011);
                                } else if (uid < 158100514) {
                                    drs = (q12 + 2011);
                                } else if (uid < 162500514) {
                                    drs = (q1 + 2012);
                                } else if (uid < 166100514) {
                                    drs = (q2 + 2012);
                                }
                            } else {
                                if (uid < 169400514) {
                                    drs = (q3 + 2012);
                                } else if (uid < 172100514) {
                                    drs = (q4 + 2012);
                                } else if (uid < 174600514) {
                                    drs = (q5 + 2012);
                                } else if (uid < 176900514) {
                                    drs = (q6 + 2012);
                                }
                            }
                        }
                    }
                }
            } else {
                if (uid < 311700014) {
                    if (uid < 233200014) {
                        if (uid < 202900514) {
                            if (uid < 188200514) {
                                if (uid < 179500514) {
                                    drs = (q7 + 2012);
                                } else if (uid < 182200514) {
                                    drs = (q8 + 2012);
                                } else if (uid < 184900514) {
                                    drs = (q9 + 2012);
                                } else if (uid < 188200514) {
                                    drs = (q10 + 2012);
                                }
                            } else {
                                if (uid < 191800514) {
                                    drs = (q11 + 2012);
                                } else if (uid < 195300514) {
                                    drs = (q12 + 2012);
                                } else if (uid < 199500514) {
                                    drs = (q1 + 2013);
                                } else if (uid < 202900514) {
                                    drs = (q2 + 2013);
                                }
                            }
                        } else {
                            if (uid < 219230514) {
                                if (uid < 206800514) {
                                    drs = (q3 + 2013);
                                } else if (uid < 210100514) {
                                    drs = (q4 + 2013);
                                } else if (uid < 213200514) {
                                    drs = (q5 + 2013);
                                } else if (uid < 216000514) {
                                    drs = (q6 + 2013);
                                } else if (uid < 219230514) {
                                    drs = (q7 + 2013);
                                }
                            } else {
                                if (uid < 222530514) {
                                    drs = (q8 + 2013);
                                } else if (uid < 225800014) {
                                    drs = (q9 + 2013);
                                } else if (uid < 229500014) {
                                    drs = (q10 + 2013);
                                } else if (uid < 233200014) {
                                    drs = (q11 + 2013);
                                }
                            }
                        }
                    } else {
                        if (uid < 267600014) {
                            if (uid < 252600014) {
                                if (uid < 236800014) {
                                    drs = (q12 + 2013);
                                } else if (uid < 241400014) {
                                    drs = (q1 + 2014);
                                } else if (uid < 245100014) {
                                    drs = (q2 + 2014);
                                } else if (uid < 249000014) {
                                    drs = (q3 + 2014);
                                } else if (uid < 252600014) {
                                    drs = (q4 + 2014);
                                }
                            } else {
                                if (uid < 256100014) {
                                    drs = (q5 + 2014);
                                } else if (uid < 259600014) {
                                    drs = (q6 + 2014);
                                } else if (uid < 263600014) {
                                    drs = (q7 + 2014);
                                } else if (uid < 267600014) {
                                    drs = (q8 + 2014);
                                }
                            }
                        } else {
                            if (uid < 290210014) {
                                if (uid < 271400014) {
                                    drs = (q9 + 2014);
                                } else if (uid < 275700014) {
                                    drs = (q10 + 2014);
                                } else if (uid < 280110014) {
                                    drs = (q11 + 2014);
                                } else if (uid < 284510014) {
                                    drs = (q12 + 2014);
                                } else if (uid < 290210014) {
                                    drs = (q1 + 2015);
                                }
                            } else {
                                if (uid < 294810014) {
                                    drs = (q2 + 2015);
                                } else if (uid < 299400014) {
                                    drs = (q3 + 2015);
                                } else if (uid < 303400014) {
                                    drs = (q4 + 2015);
                                } else if (uid < 307400014) {
                                    drs = (q5 + 2015);
                                } else if (uid < 311700014) {
                                    drs = (q6 + 2015);
                                }
                            }
                        }
                    }
                } else {
                    if (uid < 398300002) {
                        if (uid < 352800014) {
                            if (uid < 331300014) {
                                if (uid < 316500014) {
                                    drs = (q7 + 2015);
                                } else if (uid < 321300014) {
                                    drs = (q8 + 2015);
                                } else if (uid < 326100014) {
                                    drs = (q9 + 2015);
                                } else if (uid < 331300014) {
                                    drs = (q10 + 2015);
                                }
                            } else {
                                if (uid < 336410014) {
                                    drs = (q11 + 2015);
                                } else if (uid < 341400014) {
                                    drs = (q12 + 2015);
                                } else if (uid < 347200014) {
                                    drs = (q1 + 2016);
                                } else if (uid < 352800014) {
                                    drs = (q2 + 2016);
                                }
                            }
                        } else {
                            if (uid < 377100014) {
                                if (uid < 358300014) {
                                    drs = (q3 + 2016);
                                } else if (uid < 363110014) {
                                    drs = (q4 + 2016);
                                } else if (uid < 367800014) {
                                    drs = (q5 + 2016);
                                } else if (uid < 372300014) {
                                    drs = (q6 + 2016);
                                } else if (uid < 377100014) {
                                    drs = (q7 + 2016);
                                }
                            } else {
                                if (uid < 382100014) {
                                    drs = (q8 + 2016);
                                } else if (uid < 387211100) {
                                    drs = (q9 + 2016);
                                } else if (uid < 392500001) {
                                    drs = (q10 + 2016);
                                } else if (uid < 398300002) {
                                    drs = (q11 + 2016);
                                }
                            }
                        }
                    } else {
                        if (uid < 440270000) {
                            if (uid < 421494896) {
                                if (uid < 404300001) {
                                    drs = (q12 + 2016);
                                } else if (uid < 410700001) {
                                    drs = (q1 + 2017);
                                } else if (uid < 416226630) {
                                    drs = (q2 + 2017);
                                } else if (uid < 421494896) {
                                    drs = (q3 + 2017);
                                }
                            } else {
                                if (uid < 426560000) {
                                    drs = (q4 + 2017);
                                } else if (uid < 431230734) {
                                    drs = (q5 + 2017);
                                } else if (uid < 435730734) {
                                    drs = (q6 + 2017);
                                } else if (uid < 440270000) {
                                    drs = (q7 + 2017);
                                }
                            }
                        } else {
                            if (uid < 471000000) {
                                if (uid < 444970000) {
                                    drs = (q8 + 2017);
                                } else if (uid < 449670000) {
                                    drs = (q9 + 2017);
                                } else if (uid < 454570000) {
                                    drs = (q10 + 2017);
                                } else if (uid < 459811000) {
                                    drs = (q11 + 2017);
                                } else if (uid < 465300000) {
                                    drs = (q12 + 2017);
                                } else if (uid < 471000000) {
                                    drs = (q1 + 2018);
                                }
                            } else {
                                if (uid < 475880000) {
                                    drs = (q2 + 2018);
                                } else if (uid < 481200000) {
                                    drs = (q3 + 2018);
                                } else if (uid < 485799000) {
                                    drs = (q4 + 2018);
                                } else if (uid < 490300000) {
                                    drs = (q5 + 2018);
                                } else if (uid < 494800000) {
                                    drs = (q6 + 2018);
                                } else {
                                    drs = (q7 + 2018);
                                }
                            }
                        }
                    }
                }
            }
        };
    };
};

function crtPID() {
    if (document.getElementById("profile")) {
        if (document.getElementById("page_avatar")) {
            if (!document.getElementById("data_reg_box_ava_id")) {
                if (uid !== undefined) {
                    var b = document.getElementById("page_avatar");
                    var div = document.createElement('div');
                    var stroka = ("<div id=\"data_reg_box_ava_id\" style=\"position: relative;width: 96%;margin: auto auto 8px;height:16px;border-radius: 3px;text-align: center;font-size:12px;font-weight: 700;color: #ffffff;background-color: #4c75a3;font-family: Tahoma,sans-serif\">id: " + uid + "</div>");
                    div.innerHTML = (stroka);
                    b.insertBefore(div, b.firstChild);
                };
            };
        };
    };
};

function crtTP() {
    if (document.getElementById("profile")) {
        if (document.getElementById("page_info_wrap")) {
            if (!document.getElementById("data_reg_box")) {
                var b = document.getElementById("page_info_wrap");
                var div = document.createElement('div');
                b.style.paddingTop = "5px";
                var stroka = ("<div id=\"data_reg_box\" style=\"position:relative;width:100%;height:auto;height:30px;text-align:center;margin:0 auto 7px;border-radius: 3px;background-color: #4c75a3;font-size:12px;font-weight: 700;color: #ffffff\">" + "<div id=\"data_reg_box_left_info\" style=\"position:relative;width:250px;height:30px;margin:1px 0 0 0;display: inline-block;font-family:Tahoma,sans-serif\">" + chrome.i18n.getMessage("regDate") + "<br>" + drs + "</div>" + "<div id=\"data_reg_box_left_data\" style=\"position:relative;width:60px;height:30px;margin:1px 0 0 1%\"></div>" + "<div id=\"data_reg_box_time\"></div>" + "</div>");
                div.innerHTML = (stroka);
                b.insertBefore(div, b.firstChild);
            }
        };
    };
};

dlR();
gtUI();
gtDR();
crtPID();
crtTP();
var listObserver = new MutationObserver(elementAdded);
listObserver.observe(document.body, {
    childList: true,
    subtree: true
});

function elementAdded(mutations) {
    dlR();
    gtUI();
    gtDR();
    crtPID();
    crtTP();
}