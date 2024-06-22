insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (1, "$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi", "admin@gmail.com", "admin","admin","adresa", "grad", "drzava","4125","SYSTEM_ADMIN")
insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (2, "$2a$12$xk5MpChhW8jj0bWgoE2hkeYmlgvxPVcAzlJckE5js3c3G/VhwuFqe", "pera@gmail.com", "pera","peric","adresa123", "Sabac", "Srbija","52845","USER")
insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (3, "$2a$12$xk5MpChhW8jj0bWgoE2hkeYmlgvxPVcAzlJckE5js3c3G/VhwuFqe", "jovan@gmail.com", "jovan","jovic","adresa123", "Sabac", "Srbija","52845","USER")

--Vina
insert into wine(id, name, year, wine_color, wine_sugar ) value (1,"Vino1","2023","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (2,"Vino2","2022","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (3,"Vino3","2021","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (4,"Vino4","2020","CRVENO","SLATKO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (5,"Vino5","2019","CRVENO","SLATKO")

--Meso
insert into meat(id,name,national_cuisine) values(1,"meso1","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(2,"meso2","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(3,"meso3","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(4,"meso4","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(5,"meso5","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(6,"meso6","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(7,"meso7","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(8,"meso8","INDIJSKA")
insert into meat(id,name,national_cuisine) values(9,"meso9","MEKSICKA")
insert into meat(id,name,national_cuisine) values(10,"meso10","KINESKA")
insert into meat(id,name,national_cuisine) values(11,"meso11","MEKSICKA")
insert into meat(id,name,national_cuisine) values(12,"meso12","KINESKA")
insert into meat(id,name,national_cuisine) values(13,"meso13","MEKSICKA")

insert into wine_meat(wine_id,meat_id) values(1,1)
insert into wine_meat(wine_id,meat_id) values(1,2)
insert into wine_meat(wine_id,meat_id) values(1,3)
insert into wine_meat(wine_id,meat_id) values(1,4)
insert into wine_meat(wine_id,meat_id) values(2,1)
insert into wine_meat(wine_id,meat_id) values(2,2)
insert into wine_meat(wine_id,meat_id) values(3,3)
insert into wine_meat(wine_id,meat_id) values(3,4)


--Sosevi
insert into sauce(id,name, national_cuisine) values(1,"sos1", "ITALIJANSKA")
insert into sauce(id,name, national_cuisine) values(2,"sos2", "ITALIJANSKA")
insert into sauce(id,name, national_cuisine) values(3,"sos3", "ITALIJANSKA")
insert into sauce(id,name, national_cuisine) values(4,"sos4", "FRANCUSKA")
insert into sauce(id,name, national_cuisine) values(5,"sos5", "FRANCUSKA")
insert into sauce(id,name, national_cuisine) values(6,"sos6", "INDIJSKA")
insert into sauce(id,name, national_cuisine) values(7,"sos7", "INDIJSKA")
insert into sauce(id,name, national_cuisine) values(8,"sos8", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(9,"sos9", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(10,"sos10","KINESKA")
insert into sauce(id,name, national_cuisine) values(11,"sos11", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(12,"sos12", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(13,"sos13","KINESKA")

insert into wine_sauce(wine_id,sauce_id) values(1,1)
insert into wine_sauce(wine_id,sauce_id) values(1,2)
insert into wine_sauce(wine_id,sauce_id) values(1,3)
insert into wine_sauce(wine_id,sauce_id) values(2,1)
insert into wine_sauce(wine_id,sauce_id) values(2,2)
insert into wine_sauce(wine_id,sauce_id) values(3,3)

--Zacini
insert into spice(id, name, national_cuisine) values(1,"zacin1","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(2,"zacin2","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(3,"zacin3","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(4,"zacin4","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(5,"zacin5","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(6,"zacin6","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(7,"zacin7","INDIJSKA")
insert into spice(id, name, national_cuisine) values(8,"zacin8","MEKSICKA")
insert into spice(id, name, national_cuisine) values(9,"zacin9","MEKSICKA")
insert into spice(id, name, national_cuisine) values(10,"zacin10","KINESKA")
insert into spice(id, name, national_cuisine) values(11,"zacin11","MEKSICKA")
insert into spice(id, name, national_cuisine) values(12,"zacin12","MEKSICKA")
insert into spice(id, name, national_cuisine) values(13,"zacin13","KINESKA")

insert into wine_spice(wine_id,spice_id) values (1,1)
insert into wine_spice(wine_id,spice_id) values (1,2)
insert into wine_spice(wine_id,spice_id) values (1,3)
insert into wine_spice(wine_id,spice_id) values (1,4)
insert into wine_spice(wine_id,spice_id) values (2,2)
insert into wine_spice(wine_id,spice_id) values (2,3)
insert into wine_spice(wine_id,spice_id) values (3,1)
insert into wine_spice(wine_id,spice_id) values (3,3)
insert into wine_spice(wine_id,spice_id) values (3,5)





