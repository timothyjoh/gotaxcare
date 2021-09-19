<svelte:head>
  <title>Contact Us</title>
</svelte:head>

<h1>Contact Us</h1>
<p>
  <strong>Tax Care, LLC</strong><br />
  1910 Erickson Ave # 5<br />
  Harrisonburg, VA 22801-8500<br />
  <strong>540.433.2273</strong>&nbsp; &nbsp;
</p>
<p>&nbsp;</p>
<p style="margin-left: 60px;">
  Client Portal &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<a
    href="https://gotaxcare.securefilepro.com/"
    target="_blank">https://gotaxcare.securefilepro.com/</a
  >
</p>
<p style="color: #000000;">We look forward to hearing from you! You may also fill out the&nbsp;</p>
<span style="color: #000000;"
  >form below and one of our team &nbsp;members will be in touch.&nbsp;</span
>
<p>&nbsp;</p>
<form
  name="catwebformform30269"
  onsubmit="return checkWholeForm30269(this)"
  enctype="multipart/form-data"
  method="post"
>
  <div><span class="req">*</span> Required</div>
  <table class="webform" border="0" cellspacing="0" cellpadding="2">
    <tbody>
      <tr>
        <td
          ><label for="Title">Title</label><br />
          <select name="Title" class="cat_dropdown_smaller" id="Title">
            <option selected="selected" value="554108">DR</option>
            <option value="554107">MISS</option>
            <option value="554104">MR</option>
            <option value="554105">MRS</option>
            <option value="554106">MS</option>
          </select>
        </td>
      </tr>
      <tr>
        <td
          ><label for="FirstName">First Name <span class="req">*</span></label><br />
          <input
            name="FirstName"
            class="cat_textbox"
            id="FirstName"
            type="text"
            maxlength="255"
            autocomplete="OFF"
          />
        </td>
      </tr>
      <tr>
        <td
          ><label for="LastName">Last Name <span class="req">*</span></label><br />
          <input
            name="LastName"
            class="cat_textbox"
            id="LastName"
            type="text"
            maxlength="255"
            autocomplete="OFF"
          />
        </td>
      </tr>
      <tr>
        <td
          ><label for="EmailAddress">Email Address <span class="req">*</span></label><br />
          <input
            name="EmailAddress"
            class="cat_textbox"
            id="EmailAddress"
            type="text"
            maxlength="255"
            autocomplete="OFF"
          />
        </td>
      </tr>
      <tr>
        <td
          ><label for="HomePhone">Phone Number *</label><br />
          <input
            name="HomePhone"
            class="cat_textbox"
            id="HomePhone"
            type="text"
            maxlength="255"
            autocomplete="OFF"
          />
        </td>
      </tr>
      <tr>
        <td
          ><label for="CAT_Custom_191604">Comments</label><br />
          <textarea
            name="CAT_Custom_191604"
            class="cat_listbox"
            id="CAT_Custom_191604"
            onkeydown="if(this.value.length&gt;=1024)this.value=this.value.substring(0,1023);"
            rows="4"
            cols="10"
          />
        </td>
      </tr>
      <tr>
        <td><input class="cat_button" id="catwebformbutton" type="submit" value="Submit" /></td>
      </tr>
    </tbody>
  </table>
  <script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js"></script>
  <script type="text/javascript">
    //<![CDATA[
    var submitcount30269 = 0
    function checkWholeForm30269(theForm) {
      var why = ''
      if (theForm.FirstName) why += isEmpty(theForm.FirstName.value, 'First Name')
      if (theForm.LastName) why += isEmpty(theForm.LastName.value, 'Last Name')
      if (theForm.EmailAddress) why += checkEmail(theForm.EmailAddress.value)
      if (theForm.CaptchaV2)
        why += captchaIsInvalid(
          theForm,
          'Enter Word Verification in box below',
          'Please enter the correct Word Verification as seen in the image'
        )
      if (why != '') {
        alert(why)
        return false
      }
      if (submitcount30269 == 0) {
        submitcount30269++
        theForm.submit()
        return false
      } else {
        alert('Form submission is in progress.')
        return false
      }
    }
    //]]>
  </script>
</form>
<div>
  <br />
  <br />
  <p>&nbsp;</p>
</div>

<style>
  h1 {
    color: #1a8d14;
    font-weight: 500;
    font-family: 'Encode Sans Condensed';
  }
</style>
