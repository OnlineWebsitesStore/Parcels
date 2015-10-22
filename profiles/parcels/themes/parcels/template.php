<?php

/**
 * Implements theme_menu_tree__MENUNAME.
 */
function parcels_menu_tree__primary($variables) {
  return '<ul class="menu nav navbar-nav navbar-right">' . $variables['tree'] . '</ul>';
}
