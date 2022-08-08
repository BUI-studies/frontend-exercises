## TASK-01

Зверстати та оживити бургер меню. Тобто зробити примітивне меню, показувати меню по натисканню на іконку бургеру, та ховати при натисканні на хрестик.

## TASK-02

Змінити курсор, тобто тегу html вимкнути властивість курсору(cursor: none), та оживити елемент з класом(root-cursor), зробити так щоб він пересувався по сторінці як звичайний курсор миші.

```html
<div class="root-cursor"></div>
```

```css
.root-cursor {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid;
	position: absolute;
	transition: 0.3s;
}
```

## TASK-03

Відслідковувати клавіатурний браузерний івент таким чином, щоб при натисканні кнопки на клавіатурі,
у відповідного елементу зʼявлявся клас `hit` для того щоб підсвітити натискання.
Назви всіх натиснутих клавіш записувати у заголовок з класом 'title'.

#### Розмітка HTML:

```html
<h1 class="title"></h1>
<div class="keyboard">
	<ul class="row row-0">
		<li class="pinky" data-value="esc">ESC</li>
		<li class="pinky" data-value="back">BACK</li>
	</ul>
	<ul class="row row-1">
		<li class="pinky" data-value="tab">TAB</li>
		<li class="pinky" data-value="Q">Q</li>
		<li class="ring" data-value="W">W</li>
		<li class="middle" data-value="E">E</li>
		<li class="pointer1st" data-value="R">R</li>
		<li class="pointer2nd" data-value="T">T</li>
		<li class="pointer2nd" data-value="Y">Y</li>
		<li class="pointer1st" data-value="U">U</li>
		<li class="middle" data-value="I">I</li>
		<li class="ring" data-value="O">O</li>
		<li class="pinky" data-value="P">P</li>
		<li class="pinky">[</li>
		<li class="pinky">]</li>
		<li class="pinky">\</li>
	</ul>
	<ul class="row row-2">
		<li class="pinky" data-value="caps">CAPS</li>
		<li class="pinky" data-value="A">A</li>
		<li class="ring" data-value="S">S</li>
		<li class="middle" data-value="D">D</li>
		<li class="pointer1st" data-value="F">F</li>
		<li class="pointer2nd" data-value="G">G</li>
		<li class="pointer2nd" data-value="H">H</li>
		<li class="pointer1st" data-value="J">J</li>
		<li class="middle" data-value="K">K</li>
		<li class="ring" data-value="L">L</li>
		<li class="pinky">:</li>
		<li class="pinky">''</li>
		<li class="pinky" data-value="enter">ENTER</li>
	</ul>
	<ul class="row row-3">
		<li class="pinky" data-value="left-shift">SHIFT</li>
		<li class="pinky" data-value="Z">Z</li>
		<li class="ring" data-value="X">X</li>
		<li class="middle" data-value="C">C</li>
		<li class="pointer1st" data-value="V">V</li>
		<li class="pointer2nd" data-value="B">B</li>
		<li class="pointer2nd" data-value="N">N</li>
		<li class="pointer1st" data-value="M">M</li>
		<li class="middle">,</li>
		<li class="ring">.</li>
		<li class="pinky">;</li>
		<li class="pinky" data-value="right-shift">SHIFT</li>
	</ul>
</div>
```

```css
.title {
	color: mintcream;
	text-transform: uppercase;
	margin-top: 3em;
	margin-bottom: 3em;
	font-size: 1em;
	letter-spacing: 0.3em;
}
.keyboard {
	display: flex;
	flex-direction: column;
}
.row {
	list-style: none;
	display: flex;
}
li {
	height: 3em;
	width: 3em;
	color: rgba(0, 0, 0, 0.7);
	border-radius: 0.4em;
	line-height: 3em;
	letter-spacing: 1px;
	margin: 0.4em;
	transition: 0.3s;
	text-align: center;
	font-size: 1em;
}
#tab {
	width: 5em;
}
#caps {
	width: 6em;
}
#left-shift {
	width: 8em;
}
#enter {
	width: 6em;
}
#right-shift {
	width: 8em;
}
#back {
	width: 5em;
}
.pinky {
	background-color: crimson;
}
.pinky.selected {
	color: crimson;
}
.ring {
	background-color: coral;
}
.ring.selected {
	color: coral;
}
.middle {
	background-color: darkorange;
}
.middle.selected {
	color: darkorange;
}
.pointer1st {
	background-color: gold;
}
.pointer1st.selected {
	color: gold;
}
.pointer2nd {
	background-color: khaki;
}
.pointer2nd.selected {
	color: khaki;
}
.fill-out-key {
	background-color: slategrey;
}
.hit {
	animation: hit 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes hit {
	0% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}
```
