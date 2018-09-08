
function random_int (minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

function choose_from(pool) {
  return pool[random_int(0,pool.length-1)];
};

function generate_patient_name () {
  var male_name_pool = ['Roland', 'WH', 'Samuel', 'Dragon'];
  var female_name_pool = ['JiaHui', 'MinPei', 'AiXin', 'Agnes'];
  var family_name_pool = ['Vo', 'Chow', 'Ong', 'Lie', 'Chua'];
  var gender = random_int(0,1);
  if (gender == 1) {
    return "Mr "+choose_from(male_name_pool)+" "+choose_from(family_name_pool);
  } else {
    return "Ms "+choose_from(female_name_pool)+" "+choose_from(family_name_pool);
  };
};

function generate_patient_age () {
  return random_int(14,80);
};

function generate_socrates (){
  var socrates_pool = [ ['arm', 'forearm','chest','eye','abdomen','thigh','leg','foot','lower back','knee'],
                        ['acute', 'subacute', 'hyperacute','chronic'],
                        ['sharp','dull','electric-like'],
                        ['nil','lying down','standing up','heatpacks','resting','panadol'],
                        ['worse in the morning','worse at night','constant','in waves throughout the day'],
                        ['nil',"when it's cold",'when hungry','when horny']];
  var s = "s: "+choose_from(['left','right'])+" "+choose_from(socrates_pool[0])+'<br>';
  var o = 'o: '+choose_from(socrates_pool[1])+'<br>';
  var c = 'c: '+choose_from(socrates_pool[2])+'<br>';
  var r = 'r: '+choose_from(['nil','radiate to '+choose_from(['left','right'])+" "+choose_from(socrates_pool[0]),'radiate to '+choose_from(['left','right'])+" "+choose_from(socrates_pool[0])])+'<br>';
  var a = 'a: '+choose_from(socrates_pool[3])+'<br>';
  var t = 't: '+choose_from(socrates_pool[4])+'<br>';
  var e = 'e: '+choose_from(socrates_pool[5])+'<br>';
  var s2 = 's: rated '+random_int(1,10)+' out of 10'+'<br>';
  return s+o+c+r+a+t+e+s2;
};

function generate_osce () {
  var osce_case = "";
  osce_case += "patient id: "+generate_patient_name()+", age: "+generate_patient_age()+"<br>";
  osce_case += "pc: pain <br>hpc:<br>";
  osce_case += generate_socrates();
  return osce_case
}
