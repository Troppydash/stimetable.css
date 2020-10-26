# stimetable.css
css stylesheet inspired by the stimetable website


## How to Use

RULES

[] is a list of optional specifier  
s: s1, s2, where s1 and s2 are the options for s, prefix the s with base classname if in a html class attribute

EXAMPLE  
style: primary, secondary  

    <button class="st-button [--<style>]">This is a button</button>  
**is the same as**  

    <button class="st-button st-button--primary>This is a button</button> 
or  

    <button class="st-button st-button--secondary>This is a button</button> 

### CSS Global Variables

variants: hover, focus, text, text-dim

    :root {
        --st-primary[-<variants>]: #xxxxxx,  
        --st-secondary[-<variants>]: #xxxxxx,  
        --st-highlight: #f2f2f2,
        --st-background: #ffffff;
        --st-background-hover: #fafafa;
        --st-background-focus: #f4f4f4;
        --st-text: #000000;
        --st-text-dim: #282828;
    }


### Button
 
size: big, medium, small  
style: primary, secondary

    <button class="st-button [--fill, --<size>, --<style>]">This is a button</button>

### Text

size: big, medium, small  
style: primary, secondary
percent: 10...400 step 10

    <p class="st-text [--<size>, --<style> --<percent>]">This is a paragraph</p>

### Input
 
size: big, medium, small  
style: primary, secondary

    <input class="st-input [--fill, --<size>, --<style>]" placeholder="This is an input" />

### Select
 
size: big, medium, small  
style: primary, secondary

    <select class="st-select [--fill, --<size>, --<style>]">This is a select</select>

### Forms

size: big, medium, small  
style: primary, secondary
    
    <form class="st-form">
        <div class="st-form__control [--size]">
            <label class="st-form__label [--multi, --full, --settings]">
                <span>Form Label</span>
                <ANY class="st-form__[input, select, submit] [--<size>, --<style>]" />
            </label>
        </div>
    </form>
    

### Table
 
size: big, medium, small  
style: primary, secondary

    <table class="st-table [--full, --<size>, --<style>]">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Content 1</td>
                <td>Content 1</td>
            </tr>
        </tbody>
    </table>
