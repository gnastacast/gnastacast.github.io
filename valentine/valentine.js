var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 60) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);

function encrypt(text, pwd) {
  return CryptoJS.AES.encrypt(text, pwd).toString();
}

function decrypt(event) {
  event.preventDefault();
  link = "https://drive.google.com/uc?export=view&id="

  encrypted = ["U2FsdGVkX1/Mpb/4gGmOjorn4B1Iry7Fnth9Yw2UpAmtRtsNA+Z0xu9jkKf5qVgEuiU+JvJL+BlZHxHJGPV8JQ==",
               "U2FsdGVkX1+Wlzu0tTB1R/yhSXa8BpIrlDl0AjfprKp5cqDC6O8Bkp6aS0qEibzPquOLEUMbtaOpN8fKwUQD8A==",
               "U2FsdGVkX1+Zk/V0ff+YouIl7km3akNUVdUmdO+fR1ux7XMXTCJOnPFUqJCr25cA7+6u5qulKtoopTxSE8Xu7A==",
               "U2FsdGVkX18qHDecrdZV9HZieLPOCJY3kHiw87JKo/apmZzQJQ6UF1cwozqyD7h7FzOf8ZI/hsIOT7XxFfR3ng==",
               "U2FsdGVkX19/NrvxKFBB9WzXUwf6u9ln/kepKAe76m8zdFl+tsWlaJE1aJVFhDvslCaCT5EWb/kFc5H5klQM6g==",
               "U2FsdGVkX19OeWoyJOe4hZHl4G9CF6YydjRvaDZXi75sdehzXtLj71RgWTIQoERfuocJMj04YCMy4p5TuLp2Lg==",
               "U2FsdGVkX1/CMndRdOxhJBKlMbe/IYw6WI4CUdJBpkMVxu3QQncwPc1WJfo0tcFEXO89mmv4dtLdEXURWccKMg==",
               "U2FsdGVkX19EyM3kTd+A+wDMxygOH4kkxaenBrRZ5v5QX2cnVW5pMFvLPKFbt+htX34K07CGRe2SKAY0L9iFgw==",
               "U2FsdGVkX19JyCyBH3KiNvXCkH0jDLzSQ8evTQyjQ975kFt/3X/Tckm/BwphMZyHI89cTT/sYuSwPxHTdVWAtw==",
               "U2FsdGVkX1+VsmOGaZO/xpJhYS0J9xZEvG+YcwgVMXApgeobLJvtDGrO99pQ0/zOSEb2ZrUssgqRILEfOSJosA==",
               "U2FsdGVkX1/JUPpqgzkWRyRS30+wHHbR6ZClfmdUOzsAaNs5+1iTkoGKfscgGzyuewNTy305cqvHVJIAsunibQ==",
               "U2FsdGVkX19ZQj4mhIxkvRzR+peWPvU9oTSMy4UfBIabIbcDdUQcoC/8Tmccdl6t5hEi7R0mi+XDnA1GHv2vtw==",
               "U2FsdGVkX198qflCvmcOjHNBCJP4kWrQDMptgeQWjlY1tVJIjHYRZ/S4vnp2ApC2cvhTrT4BOvS5bjHOmNErTg==",
               // "U2FsdGVkX1+KyvSQ5E+poUve7f2BUtvTHiXTAIAeIQvX2NinekF7PgGDzYyVyG75z1GKu4CU6frIA5S2S8o+9g==",
               "U2FsdGVkX19zMuY7KBvTflMSReer3F603qOFfP1dnI+BQpUaSz4aa/aJ4ttgbelXId0bOgwJ4qFJl8H9mwlBgQ==",
               "U2FsdGVkX1//wo9JNS1fxcaCXlkZWny6C5ik9nyRPsbLsREsd1CfV9mzTpm48GAVjySkb3QJhLuTpmRzTj0jIg=="]

  var overlay = document.getElementById("encrypted_overlay");
  for (var i=0; i<encrypted.length; i++)
  {
    var decrypted = hex2a(CryptoJS.AES.decrypt(encrypted[i], document.getElementById("pwd").value).toString());
    var images = overlay.getElementsByTagName("img");
    if(images.length <= i)
    {
      var elem = document.createElement("img");
      elem.setAttribute("src", link + decrypted);
      overlay.appendChild(elem);
    } else {
      images[i].setAttribute("src", link + decrypted);
    }
  }
  document.getElementById("pwd").value = "";
  return 1;
}

// Convert hex string to ASCII.
// See https://stackoverflow.com/questions/11889329/word-array-to-string
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function overlayOn() {
  document.getElementById('notification').style.display = "none";
  document.getElementById("overlay_container").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay_container").style.display = "none";
  document.getElementById('notification').style.display = "block";
}

document.getElementById("overlay_container").addEventListener("click", function(event){if (event.srcElement.id == "overlay_container") overlayOff();});

function gotoMessage(self) {
  var children = self.parentElement.parentElement.children;
  console.log(children);
  var index = 0
  for(var i=0; i < children.length; i++)
  {
    if(children[i] == self.parentElement) index = i-1;
  }
  var message_children = document.getElementById("overlay_container").children;
  for (var i=0; i < message_children.length; i++) {
    children[i].firstElementChild.classList.remove("active");
    message_children[i].classList.remove("active");
  }
  // self.classList.add("active");
  self.classList.add("active");
  message_children[index].classList.add("active");
}