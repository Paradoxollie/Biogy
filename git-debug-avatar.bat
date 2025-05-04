@echo off
cd /d d:\Biogy\Biogy
echo Current directory:
cd
echo.
echo Git status:
git status
echo.
echo Adding all files:
git add .
echo.
echo Committing changes:
git commit -m "Add debug logs for avatar functionality"
echo.
echo Pushing to remote:
git push
echo.
echo Done!
pause
