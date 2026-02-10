Get-ChildItem 'd:\Websites\Fermium\public\Images\Website' -Directory | ForEach-Object {
    $dirName = $_.Name
    Write-Host "[$dirName]"
    Get-ChildItem $_.FullName -File | ForEach-Object {
        Write-Host "  $($_.Name)"
    }
}
