<?php


if (! function_exists('str_plural')) {
    /**
     * Get the plural form of an English word.
     *
     * @param  string  $value
     * @param  int     $count
     * @return string
     */
    function str_plural($value, $count = 2)
    {
        return Str::plural($value, $count);
    }
}
