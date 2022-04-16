" =============================================================================
" Name: xcodelike
" Purpose: XCode-like colour scheme
" Maintainer: Kazufumi Tomori (kaz6120@gmail.com)
"             Yoshiki Vazquez-Baeza (yoshiki89@gmail.com)
" 
" This colour scheme provides OS X Xcode like colouring syntax.
"
" @since  : 9.4.11
" @version: 9.7.30
" =============================================================================

set background=light

hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "xcode"
  
" =============================================================================
" Vim >= 7.0 specific colours
" =============================================================================

if version >= 700
  hi CursorLine   guibg=#2d2d2d
  hi CursorColumn guibg=#2d2d2d
  hi MatchParen   guifg=#000000 guibg=#FFFE00 gui=bold
  hi Pmenu        guifg=#f6f3e8 guibg=#444444
  hi PmenuSel     guifg=#000000 guibg=#A90D91
endif

" =============================================================================
" General colours
" =============================================================================
hi Cursor       guifg=#000000 guibg=#000000 gui=none   " Cursor
hi Normal       guifg=#000000 guibg=#ffffff gui=none   " Text
hi NonText      guifg=#000000 guibg=#ffffee gui=none   " Background
hi LineNr       guifg=#666666 guibg=#eeeeee gui=none   " Line Number
hi StatusLine   guifg=#eeeeee guibg=#444444 gui=italic
hi StatusLineNC guifg=#666666 guibg=#eeeeee gui=none
hi VertSplit    guifg=#eeeeee guibg=#444444 gui=none   " Vertical Split Line
hi Folded       guibg=#384048 guifg=#a0a8b0 gui=none
hi Title        guifg=#000000 guibg=NONE    gui=bold
hi Visual       guifg=#000000 guibg=#B2D5FF gui=none   " Selection
hi SpecialKey   guifg=#3875d7 guibg=#B2D5FF gui=none
hi Error        guifg=#FFFFFF guibg=#C800A7 gui=none

" =============================================================================
" Syntax highlighting
" =============================================================================
hi Comment      guifg=#197400 gui=none      " Comments
hi Todo         guifg=#FF0000 gui=bold
hi Constant     guifg=#C800A7 gui=none      " Constants
hi String       guifg=#C41A16 gui=none      " text string value 
hi Identifier   guifg=#996633 gui=none      " variable value
hi Function     guifg=#000000 gui=none
hi Type         guifg=#790EAD gui=none 
hi Statement    guifg=#A90D91 gui=none      
hi Keyword      guifg=#a91301 gui=none      " Unknown
hi PreProc      guifg=#8A4D2D gui=none      " Unknown
hi Number       guifg=#1C00CE gui=none      " Numbers
hi Special      guifg=#3E6D74 gui=none      " Format strings, etc
hi Search       guifg=#FF0000 guibg=#ffff00 " Search hilighted text is yellow
hi Delimiter    guifg=#790EAD gui=bold

" =============================================================================
" Custom coloring cases for Python that I cannot live without
" =============================================================================
hi pythonBuiltin    guifg=#2E0D6E gui=none  " Builtin function alls in python
hi pythonCustomFunc guifg=#5B2698 gui=none  " Function calls in Python
hi pythonDecorator  guifg=#3E6D74 gui=bold  " Python decorators
hi pythonInclude    guifg=#8A4D2D gui=none  " Python imports, etc

" these are all control flow things that need to be highlighted in pink
hi pythonStatement  guifg=#C800A7 gui=none	
hi pythonConditional guifg=#C800A7 gui=none  	
hi pythonRepeat	    guifg=#C800A7 gui=none 
hi pythonOperator	guifg=#C800A7 gui=none      
hi pythonException  guifg=#C800A7 gui=none	       
hi pythonBuiltinConstant  guifg=#C800A7 gui=none	       

