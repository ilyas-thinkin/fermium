$basePath = 'd:\Websites\Fermium\public\Images\Website'

Get-ChildItem $basePath -Directory | ForEach-Object {
    $dirName = $_.Name.ToLower() -replace '\s+', '-'
    $files = Get-ChildItem $_.FullName -File | Sort-Object Name
    $counter = 1
    foreach ($file in $files) {
        $ext = $file.Extension
        $newName = "fermium_${dirName}_${counter}${ext}"
        Write-Host "Renaming: $($_.Name)\$($file.Name) -> $newName"
        Rename-Item -Path $file.FullName -NewName $newName
        $counter++
    }
}

Write-Host "`nDone! All images renamed."
