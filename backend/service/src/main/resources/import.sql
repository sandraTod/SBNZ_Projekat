insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (1, "$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi", "admin@gmail.com", "admin","admin","adresa", "grad", "drzava","4125","SYSTEM_ADMIN")
insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (2, "$2a$12$xk5MpChhW8jj0bWgoE2hkeYmlgvxPVcAzlJckE5js3c3G/VhwuFqe", "pera@gmail.com", "pera","peric","adresa123", "Sabac", "Srbija","52845","USER")
insert into user(id, password,username, name, lastname,address,city,state,phone_num,role) value (3, "$2a$12$xk5MpChhW8jj0bWgoE2hkeYmlgvxPVcAzlJckE5js3c3G/VhwuFqe", "jovan@gmail.com", "jovan","jovic","adresa123", "Sabac", "Srbija","52845","USER")

--Vina
insert into wine(id, name, year, wine_color, wine_sugar ) value (1,"Merlot","2021","CRVENO","SLATKO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (2,"Pinot Bianco","2022","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (3,"Chardonnay","2021","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (4,"Suvignon blanc","2022","BELO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (5,"Cabernet","2019","CRVENO","SUVO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (6,"Zinfandel","2016","CRVENO","SLATKO")
insert into wine(id, name, year, wine_color, wine_sugar ) value (7,"Riesling","2023","BELO","SLATKO")

--Meso
insert into meat(id,name,national_cuisine) values(1,"Piletina","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(2,"Skoljke","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(3,"Junece meso","ITALIJANSKA")
insert into meat(id,name,national_cuisine) values(4,"Teletina","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(5,"Divljac","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(6,"Jastog","FRANCUSKA")
insert into meat(id,name,national_cuisine) values(7,"Jagnjetina mlevena","INDIJSKA")
insert into meat(id,name,national_cuisine) values(8,"Kozije meso","INDIJSKA")
insert into meat(id,name,national_cuisine) values(9,"Govedina","AMERICKA")
insert into meat(id,name,national_cuisine) values(10,"Svinjetina","AMERICKA")
insert into meat(id,name,national_cuisine) values(11,"Curetina","AMERICKA")
insert into meat(id,name,national_cuisine) values(12,"Patka","KINESKA")
insert into meat(id,name,national_cuisine) values(13,"Belo meso","KINESKA")
insert into meat(id,name,national_cuisine) values(14,"Riba","KINESKA")
insert into meat(id,name,national_cuisine) values(15,"Svinjska kobasica","MEKSICKA")
insert into meat(id,name,national_cuisine) values(16,"Jelen","MEKSICKA")
insert into meat(id,name,national_cuisine) values(17,"Pavo","MEKSICKA")

insert into wine_meat(wine_id,meat_id) values(1,3)
insert into wine_meat(wine_id,meat_id) values(1,2)
insert into wine_meat(wine_id,meat_id) values(1,4)
insert into wine_meat(wine_id,meat_id) values(2,2)
insert into wine_meat(wine_id,meat_id) values(3,1)
insert into wine_meat(wine_id,meat_id) values(3,3)
insert into wine_meat(wine_id,meat_id) values(3,4)
insert into wine_meat(wine_id,meat_id) values(4,1)
insert into wine_meat(wine_id,meat_id) values(5,3)
insert into wine_meat(wine_id,meat_id) values(5,1)


--Sosevi
insert into sauce(id,name, national_cuisine) values(1,"Tomato Paradajz", "ITALIJANSKA")
insert into sauce(id,name, national_cuisine) values(2,"Pavlaka", "ITALIJANSKA")
insert into sauce(id,name, national_cuisine) values(3,"Pecurke", "FRANCUSKA")
insert into sauce(id,name, national_cuisine) values(4,"Senf", "FRANCUSKA")
insert into sauce(id,name, national_cuisine) values(5,"Sir", "FRANCUSKA")
insert into sauce(id,name, national_cuisine) values(6,"Jogurt", "INDIJSKA")
insert into sauce(id,name, national_cuisine) values(7,"Paradajz", "INDIJSKA")
insert into sauce(id,name, national_cuisine) values(8,"Indijski orah", "INDIJSKA")
insert into sauce(id,name, national_cuisine) values(9,"BBQ sos", "AMERICKA")
insert into sauce(id,name, national_cuisine) values(10,"med","AMERICKA")
insert into sauce(id,name, national_cuisine) values(11,"Soja sos", "KINESKA")
insert into sauce(id,name, national_cuisine) values(12,"Terijaki sos", "KINESKA")
insert into sauce(id,name, national_cuisine) values(13,"Slatko-ljuti sos", "KINESKA")
insert into sauce(id,name, national_cuisine) values(14,"Slatko-kiseli sos", "KINESKA")
insert into sauce(id,name, national_cuisine) values(15,"Blago-slatki sos", "KINESKA")
insert into sauce(id,name, national_cuisine) values(16,"Avokado", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(17,"Crema Mexicana", "MEKSICKA")
insert into sauce(id,name, national_cuisine) values(18,"Tomatillo", "MEKSICKA")


insert into wine_sauce(wine_id,sauce_id) values(1,1)
insert into wine_sauce(wine_id,sauce_id) values(1,2)
insert into wine_sauce(wine_id,sauce_id) values(1,3)
insert into wine_sauce(wine_id,sauce_id) values(2,1)
insert into wine_sauce(wine_id,sauce_id) values(2,2)
insert into wine_sauce(wine_id,sauce_id) values(3,3)
insert into wine_sauce(wine_id,sauce_id) values(3,2)
insert into wine_sauce(wine_id,sauce_id) values(4,2)
insert into wine_sauce(wine_id,sauce_id) values(5,1)
insert into wine_sauce(wine_id,sauce_id) values(5,2)


--Zacini
insert into spice(id, name, national_cuisine) values(1,"Bosiljak","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(2,"Origano","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(3,"Beli luk","ITALIJANSKA")
insert into spice(id, name, national_cuisine) values(4,"Mladi luk","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(5,"Biber u zrnu","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(6,"Muskatni orascic","FRANCUSKA")
insert into spice(id, name, national_cuisine) values(7,"Kari","INDIJSKA")
insert into spice(id, name, national_cuisine) values(8,"Liemta","INDIJSKA")
insert into spice(id, name, national_cuisine) values(9,"Beli luk u prahu","INDIJSKA")
insert into spice(id, name, national_cuisine) values(10,"Nana","INDIJSKA")
insert into spice(id, name, national_cuisine) values(11,"Zvezdasti anis","INDIJSKA")
insert into spice(id, name, national_cuisine) values(12,"Kurkuma","INDIJSKA")
insert into spice(id, name, national_cuisine) values(13,"Paprika","AMERICKA")
insert into spice(id, name, national_cuisine) values(14,"Cimet","AMERICKA")
insert into spice(id, name, national_cuisine) values(15,"Crni luk","AMERICKA")
insert into spice(id, name, national_cuisine) values(16,"Prah 5 zacina","KINESKA")
insert into spice(id, name, national_cuisine) values(17,"Koren djumbira","KINESKA")
insert into spice(id, name, national_cuisine) values(18,"Ulje od susama","KINESKA")
insert into spice(id, name, national_cuisine) values(19,"Secuanski biber","KINESKA")
insert into spice(id, name, national_cuisine) values(20,"Cili paprike","KINESKA")
insert into spice(id, name, national_cuisine) values(21,"Kim","KINESKA")
insert into spice(id, name, national_cuisine) values(22,"Ljute papricice","MEKSICKA")
insert into spice(id, name, national_cuisine) values(23,"Slatka paprika","MEKSICKA")
insert into spice(id, name, national_cuisine) values(24,"Suseni paradajz","MEKSICKA")
insert into spice(id, name, national_cuisine) values(25,"Kumin","MEKSICKA")
insert into spice(id, name, national_cuisine) values(26,"Persun","MEKSICKA")


insert into wine_spice(wine_id,spice_id) values (1,1)
insert into wine_spice(wine_id,spice_id) values (1,2)
insert into wine_spice(wine_id,spice_id) values (1,3)
insert into wine_spice(wine_id,spice_id) values (2,2)
insert into wine_spice(wine_id,spice_id) values (2,1)
insert into wine_spice(wine_id,spice_id) values (2,3)
insert into wine_spice(wine_id,spice_id) values (3,1)
insert into wine_spice(wine_id,spice_id) values (3,2)
insert into wine_spice(wine_id,spice_id) values (3,5)
insert into wine_spice(wine_id,spice_id) values (4,3)
insert into wine_spice(wine_id,spice_id) values (5,1)
insert into wine_spice(wine_id,spice_id) values (5,2)
insert into wine_spice(wine_id,spice_id) values (5,3)






