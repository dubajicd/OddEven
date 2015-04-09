# OddEven
Adding odd and eveb classes to any repeatable element for nonCSS3

How To:

HTML:

<div id="mainid">
    <div class="someclass">
        <div class="item">
            <p>Even element</p>
        </div>
        <div class="item">
            <p>Odd element</p>
        </div>
        <div class="item">
            <p>Even element</p>
        </div>
        <div class="item">
            <p>Odd element</p>
        </div>
        <div class="item">
            <p>Even element</p>
        </div>
        <div class="item">
            <p>Odd element</p>
        </div>
    </div>
</div>

JS Call:

oddEven(jQuery('#mainid .item'));
