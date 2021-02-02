# Dropdown Styles - Formidable Forms

These fancy dropdown fields have all been created using the standard [Formidable Forms](https://formidableforms.com/) dropdown field element and then re-styled based on a post by [Mary Lou on Codrops](https://tympanus.net/codrops/2014/07/10/inspiration-for-custom-select-elements/). 

So if you fancy trying some dropdown field styling lets jump in…

To view a working demo of these styles [click here](https://www.fdmdigital.co.uk/dropdown-field-styling-formidable-forms/).

To create these styles we need to take a similar approach to how we [re-styled the Checkboxes and Radio buttons](https://www.fdmdigital.co.uk/formidable-forms-radio-checkbox-tutorial/) in our previous guide. Essentially what we’ll do is hide the default `<select>` element, copy each of the options from it and create a selection of new `<div>` elements using some JavaScript which then gives us full control over the styling and animations.

**Note i**: It’s worth pointing out at this stage that by hiding the `<select>` element and replacing it with a custom `<div>` we are losing the accessibility options that come with using a standard dropdown so if user accessibility is it a priority then these styles are probably not for you.

**Note ii**: It’s also worth highlighting at this stage that these styles work well with basic dropdown fields but do NOT currently work with any of the following field options and will require additional development if you want to use any of these features:

* Read only
* Multiselect
* Autocomplete

### How to use these style

To get started with these styles you will need to download the zip file below, unzip it and then upload the folder to your web-server. We tend to put all of our custom styling & scripts in the wp-content folder in a sub-folder but where you put them is up to you.

One you have the files uploaded to your server you can continue with the steps below.

### Step 1

* Add a dropdown field to your form
* Add the class **custom-select** to the Field Options > CSS Layout Classes
* Save the form

**Info**: We use the class custom-select to automatically set the z-index levels of the dropdowns and form sections on your page to make sure that the dropdown menus always appear on top of all other content when clicked.

![Screenshot 1](https://www.fdmdigital.co.uk/wp-content/uploads/2021/01/Fancy-dropdown-1.png)

### Step 2

* Go to form Settings > Customise HTML
* Find your dropdown field and look for the `[input]` shortcode
* Replace the shortcode with this: `<div>[input class=”cs-select cs-skin-underline”]</div>`

**Note**: The class cs-select must kept in place in place regardless of the style you choose but the class cs-skin-underline can be changed to whichever style you want to use. We also need to wrap the `[input]` shortcode in a `<div>` to make sure that the field description div is still added in the correct place in the dom if you decide to use it.

The 4 style classes are:

* cs-skin-underline
* cs-skin-border
* cs-skin-elastic
* cs-skin-rotate

![Screenshot 1](https://www.fdmdigital.co.uk/wp-content/uploads/2021/01/Fancy-dropdown-2.png)

### Step 3

* Scroll down to the **After Fields** section of the form and add the style sheets and scripts below.
* Save the form

```
<!-- Basic styles - this must be included -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-select.css">

<!-- Underline style - optional -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-skin-underline.css">

<!-- Border style - optional -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-skin-border.css">

<!-- Elastic style - optional -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-skin-elastic.css">

<!-- Rotate style - optional -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-skin-rotate.css">

<!-- Fancy Select Scripts - these must be included -->
<script src="/your-directory/fancy-select/js/classie.js"></script>
<script src="/your-directory/fancy-select/js/selectFx.js"></script>
<script src="/your-directory/fancy-select/js/fancy-select.js"></script>
```
**Note**: You do NOT need to add all 4 optional styles unless you plan on using all 4 in the same form. Simply pick the one that matches the class you added to your dropdown field.

For example if you added **cs-skin-underline** to the `[input class=”cs-select cs-skin-underline”]` shortcode then you only need to add the matching style sheet to your **After Fields** section.

E.g. 

```
<!-- Basic styles - this must be included -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-select.css">

<!-- Underline style - optional -->
<link rel="stylesheet" type="text/css" href="/your-directory/fancy-select/css/cs-skin-underline.css">

<!-- Fancy Select Scripts - these must be included -->
<script src="/your-directory/fancy-select/js/classie.js"></script>
<script src="/your-directory/fancy-select/js/selectFx.js"></script>
<script src="/your-directory/fancy-select/js/fancy-select.js"></script>
```
![Screenshot 2](https://www.fdmdigital.co.uk/wp-content/uploads/2021/01/Fancy-dropdown-3.png)


## Useful Information

### Changing Styles

You may want (or need) to make changes to these styles to fit with your website theme or branding. Where possible we have included CSS variables in these stylesheets which pull from the Formidable Forms stylesheets and inherit styles already set in your **Formidable > Styles** settings to minimise how many changes are required.

For example the Underline Style above uses the CSS variable `var(–border-color-active)` for the bottom border colour of the field and for the hover colour of each element in the dropdown. On this site that colour is a dark purple but on yours it will be whatever you set it to in the **Formidable > Styles settings**.

In some cases we have also had to add a back-up CSS rule as some older browsers (Internet Explorer) can’t render CSS variables.

These styles or colours may not work for you so you can change them in a couple of ways

1. You can overwrite any individual styles by adding your own in the **Formidable > Styles > Customise CSS** editor. You may need to add `!important` to the CSS rule to overwrite the existing rules.
2. You can edit the stylesheets directly and re-upload them to your server.

### Choosing the right style

Which style you choose may depend on the content of your dropdown field. For example the Underline & Rotate styles both use CSS keyframe animations to animate each item in the dropdown. For this to work correctly we have included (in the fancy-scripts.js file) a script for counting the number of items in each of the dropdowns on your page and adding an incrementing CSS animation delay so that they animate in nicely regardless of how many items are in the dropdown.

This works really well for short / medium lists but won’t work very well for really long lists like Countries or States as it will take a really long time for them to finish animating in.

So choose wisely!

### Vanilla JS & jQuery

Although 2 of the files (`classie.js` and `selectFx.js`) are written in vanilla JS the file `fancy-select.js` contains a mixture of vanilla JS and jQuery so you WILL need jQuery installed for this to function correctly. There are more and more WordPress themes now that don't include jQuery by default so bear this in mind. 
