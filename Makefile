PHONY: github

github:
	rm -rf docs
	cp -r public/ docs
	git add -A
	git commit -m "update gh-pages"
	git push