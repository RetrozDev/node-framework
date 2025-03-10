fx_version 'cerulean'
game 'gta5'

author 'Retroz'
description 'A  framework for FiveM codded in Javascript'
version '1.0.0'


server_scripts {
    'src/core/server/*.js',  
    'src/modules/**/server/*.js',  
}

client_scripts {
    'src/core/client/*.js',  
    'src/modules/**/client/*.js',  
}

-- ui_page 'html/ui.html'

-- files {
--     'html/ui.html',
--     'html/styles.css',
--     'html/scripts.js',
-- }
