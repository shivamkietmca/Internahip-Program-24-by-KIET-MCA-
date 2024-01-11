function validate(){
        var name = document.getElementById('name').value.trim();
        var mobileNumber = document.getElementById('mo_num').value.trim();
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('co_password').value;

        
        if (name == null || name == "") {
            alert('Please Enter Name.');
            return false;
        }

        else if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Mobile number must be 10 digits long and contain only numbers.');
            return false;
        }

        else if (password.length < 8) {
            alert('Password must have at least 8 characters.');
            return false;
        }

        else if (password !== confirmPassword) {
            alert('Password not Matched');
            return false;
        }

        else {
            alert('Form Validate Successfully')
        
        return true;
        }

}