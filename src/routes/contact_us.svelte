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

<form action="https://getform.io/f/6b9fd56c-4a29-4daf-bd83-c8f502034d38" method="POST">
  <label for="Title">Title</label>
  <select name="Title" class="cat_dropdown_smaller" id="Title">
    <option selected="selected" value="554108">DR</option>
    <option value="554107">MISS</option>
    <option value="554104">MR</option>
    <option value="554105">MRS</option>
    <option value="554106">MS</option>
  </select>
  <label for="FirstName">First Name <span class="req">*</span></label>
  <input
    name="FirstName"
    class="cat_textbox"
    id="FirstName"
    type="text"
    maxlength="255"
    autocomplete="OFF"
  />
  <label for="LastName">Last Name <span class="req">*</span></label>
  <input
    name="LastName"
    class="cat_textbox"
    id="LastName"
    type="text"
    maxlength="255"
    autocomplete="OFF"
  />
  <label for="EmailAddress">Email Address <span class="req">*</span></label>
  <input
    name="EmailAddress"
    class="cat_textbox"
    id="EmailAddress"
    type="text"
    maxlength="255"
    autocomplete="OFF"
  />
  <label for="HomePhone">Phone Number *</label>
  <input
    name="HomePhone"
    class="cat_textbox"
    id="HomePhone"
    type="text"
    maxlength="255"
    autocomplete="OFF"
  />
  <label for="Comments">Comments</label>
  <textarea name="Comments" class="" id="Comments" rows="7" cols="10" />
  <button type="submit">Send</button>
</form>

<style>
  h1 {
    color: #1a8d14;
    font-weight: 500;
    font-family: 'Encode Sans Condensed';
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label,
  input,
  select,
  textarea {
    display: block;
  }
  label {
    margin: 1rem 0 0.2rem;
  }
  input,
  select,
  textarea {
    margin: 0;
    font-size: 18px/24px;
    width: 100%;
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    align-self: flex-end;
  }
</style>
