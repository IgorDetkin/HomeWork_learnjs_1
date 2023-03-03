if (-1 || 0) alert( 'first' ); // выполнится. результат -1
if (-1 && 0) alert( 'second' ); // не выполнится. 0 - это false
if (null || -1 && 1) alert( 'third' ); // выполнится. 1 - это true