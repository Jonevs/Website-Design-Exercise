function validation() //membuat fungsi validation() untuk mengecek form yang diisi
{

    var name = document.getElementById("name").value; //buat variabel "name" untuk menampung apa yang kita isi di bagian Name
    var email = document.getElementById("email").value; //buat variabel "email" untuk menampung apa yang kita isi di bagian Email
    var phone = document.getElementById("phone").value; //buat variabel "phone" untuk menampung apa yang kita isi di bagian Phone
    var message = document.getElementById("message").value; //buat variabel "message" untuk menampung apa yang kita isi di bagian Message
    var error_message = document.getElementById("error_message"); //buat variabel "error_message" untuk menampung pesan error nantinya (sampai disini dia belum ada isinya)

    var text; //buat variabel "text" untuk menampung kalimat atau penjelasan yang dimunculkan pada bagian error_message

    if(name.length == 0) //Konsep pemrograman "IF" -> jika panjang variabel "name" = 0 (dng kata lain berarti Name nya kosong)
    {
        text="Please enter your name"; //maka kita simpan kalimat "Please enter your name" di variabel "text"
        error_message.innerHTML = text; //kemudian error_message yang ada di HTML kita isi dengan variabel "text" barusan
        return false; //return false untuk menampilkan error_messagenya (dengan kata lain nggak akan mengeluarkan pesan "Thank you")
    }

    if(!email.includes("@")) //jika email tidak mengandung simbol "@" (tanda "!" kalau di programming artinya "Not")
    {
        text="Please enter valid email"; //maka kita simpan kalimat "Please enter valid email" di variabel "text"
        error_message.innerHTML = text; //kemudian error_message yang ada di HTML kita isi dengan variabel "text" barusan
        return false; //return false untuk menampilkan error_messagenya (dengan kata lain nggak akan mengeluarkan pesan "Thank you")
    }

    //tanda || artinya "OR"", berarti kondisi dia ngecek jika kondisi 1 atau kondisi 2 terpenuhi (salah satu aja)
    if( (phone.length == 0) || (isNaN(phone)) ) //1. jika panjang phone = 0 (artinya phone nggak ada isinya), 2. jika nilai phone bukan angka (isNan = is Not a Number)
    {
        text="Please enter valid phone number"; //maka kita simpan kalimat "Please enter valid phone number" di variabel "text"
        error_message.innerHTML = text; //kemudian error_message yang ada di HTML kita isi dengan variabel "text" barusan
        return false; //return false untuk menampilkan error_messagenya (dengan kata lain nggak akan mengeluarkan pesan "Thank you")
    }

    if(message.length == 0) //jika panjang message = 0 (atau gampangnya, jika message itu kosong)
    {
        text="Please enter your message"; //maka kita simpan kalimat "Please enter your message" di variabel "text"
        error_message.innerHTML = text; //kemudian error_message yang ada di HTML kita isi dengan variabel "text" barusan
        return false; //return false untuk menampilkan error_messagenya (dengan kata lain nggak akan mengeluarkan pesan "Thank you")
    }

    alert("Thank you"); //kalau semua IF tadi nggak ada yang terpenuhi (dengan kata lain semuanya beres), maka tampilkan alert message: "Thank you"
}

