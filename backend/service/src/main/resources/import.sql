insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (1, "$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi", "admin@gmail.com", "admin","admin","adresa", "grad", "drzava","4125","SYSTEM_ADMIN")
insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (2, "$2a$12$xk5MpChhW8jj0bWgoE2hkeYmlgvxPVcAzlJckE5js3c3G/VhwuFqe", "pera@gmail.com", "pera","peric","adresa123", "Sabac", "Srbija","52845","USER")

--Vina
insert into wine(id, name, year, wine_color, wine_sugar ) value (1,"Vino1","2023","WHITE","DRY")
insert into wine(id, name, year, wine_color, wine_sugar ) value (2,"Vino2","2022","WHITE","DRY")
insert into wine(id, name, year, wine_color, wine_sugar ) value (3,"Vino3","2021","RED","SWEET")
insert into wine(id, name, year, wine_color, wine_sugar ) value (4,"Vino4","2020","RED","DRY")
insert into wine(id, name, year, wine_color, wine_sugar ) value (5,"Vino5","2019","WHITE","SWEET")

--Meso
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(1,"meso1","ITALIAN",1,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(2,"meso2","ITALIAN",1,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(3,"meso3","ITALIAN",1,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(4,"meso4","FRENCH",1,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(5,"meso5","FRENCH",2,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(6,"meso6","FRENCH",2,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(7,"meso7","INDIAN",3,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(8,"meso8","MAXICAN",4,true)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(9,"meso9","MAXICAN",null,false)
insert into meat(id,name,national_cuisine,wine_id,is_connected) values(10,"meso10","CHINESE",null,false)


--Sosevi
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(1,"sos1", "ITALIAN",1,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(2,"sos2", "ITALIAN",1,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(3,"sos3", "ITALIAN",1,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(4,"sos4", "FRENCH",2,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(5,"sos5", "FRENCH",2,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(6,"sos6", "INDIAN",3,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(7,"sos7", "INDIAN",3,true)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(8,"sos8", "MAXICAN",null,false)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(9,"sos9", "MAXICAN",null,false)
insert into sauce(id,name, national_cuisine, wine_id,is_connected) values(10,"sos10","CHINESE",null,false)

--Zacini
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(1,"zacin1","ITALIAN",1,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(2,"zacin2","ITALIAN",1,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(3,"zacin3","ITALIAN",1,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(4,"zacin4","FRENCH",1,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(5,"zacin5","FRENCH",2,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(6,"zacin6","FRENCH",2,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(7,"zacin7","INDIAN",3,true)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(8,"zacin8","MAXICAN",null,false)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(9,"zacin9","MAXICAN",null,false)
insert into spice(id, name, national_cuisine, wine_id,is_connected) values(10,"zacin10","CHINESE",null,false)




