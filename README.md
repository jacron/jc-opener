jc-opener
=========
jcOpener is a directive for opening/closing an element

##usage-example
    <jc-opener 
     [target="selector"]
     [initial="open|closed"]>
    </jc-opener>
##explanation
Without other attributes, the div with attribute jc-opener toggles
(shows/hides) the next element.

Optional attribute target: the jQuery / angular selector of the element
that is to be shown/hidden.

Optional attribute initial: initial state of target element, default: closed.
##dependencies
Dependencies: angular