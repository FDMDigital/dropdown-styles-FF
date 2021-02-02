# dropdown-styles-FF

## Dropdown Styles - Formidable Forms

These fancy dropdown fields have all been created using the standard [Formidable Forms](https://formidableforms.com/) dropdown field element and then re-styled based on a post by [Mary Lou on Codrops](https://tympanus.net/codrops/2014/07/10/inspiration-for-custom-select-elements/). 

So if you fancy trying some dropdown field styling lets jump in…

To view w working demo of these styles [click here](https://www.fdmdigital.co.uk/dropdown-field-styling-formidable-forms/).

To create these styles we need to take a similar approach to how we [re-styled the Checkboxes and Radio buttons](https://www.fdmdigital.co.uk/formidable-forms-radio-checkbox-tutorial/) in our previous guide. Essentially what we’ll do is hide the default `<select>` element, copy each of the options from it and create a selection of new `<div>` elements using some JavaScript which then gives us full control over the styling and animations.

**Note i**: It’s worth pointing out at this stage that by hiding the `<select>` element and replacing it with a custom `<div>` we are losing the accessibility options that come with using a standard dropdown so if user accessibility is it a priority then these styles are probably not for you.

**Note ii**: It’s also worth highlighting at this stage that these styles work well with basic dropdown fields but do NOT currently work with any of the following field or form options and will require additional development if you want to use any of these features:

* Read only
* Multiselect
* Autocomplete
* Multipage forms


### How to use these style

To get started with these styles you will need to download the zip file below, unzip it and then upload the folder to your web-server. We tend to put all of our custom styling & scripts in the wp-content folder in a sub-folder but where you put them is up to you.

One you have the files uploaded to your server you can continue with the steps below.

### Step 1:

1 Add a dropdown field to your form
2 Add the class “custom-select” to the Field Options > CSS Layout Classes
3 Save the form

**Info**: We use the class custom-select to automatically set the z-index levels of the dropdowns and form sections on your page to make sure that the dropdown menus always appear on top of all other content when clicked.

![Screenshot 1](https://www.fdmdigital.co.uk/wp-content/uploads/2021/01/Fancy-dropdown-1.png)
